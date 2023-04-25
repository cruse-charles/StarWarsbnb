import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import React, { useState, useEffect } from 'react';
import { addDays, format } from 'date-fns';
import { getReservation, updateReservation } from '../../reservations';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { createReservation } from '../../reservations';
import './Reservation.css'

let today = new Date(Date.now())
let day = today.getDate()
let month = today.getMonth()
let year = today.getFullYear()

const formattedToday = new Date(year, month, day);
const formattedYesterday = new Date(year, month, day - 1);




const ListsingReservationForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    
    const {listingId, reservationId} = useParams()
    let user = useSelector((state) => (state.session.user))
    const reservation = useSelector(getReservation(reservationId))
    const disabledDays = [{from: new Date(2020, 1, 1), to: formattedYesterday}]
    
    const [numGuests, setNumGuests] = useState(0)
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [range, setRange] = useState()
    const [errors, setErrors] = useState([])
    // const [editListingId, setEditListingId] = useState()


    useEffect(() => {
        if(range){
            setStartDate(range.from)
            setEndDate(range.to)
            // setEditListingId(listingId)
            setErrors([])
        }
    }, [range, dispatch])


    let footer = <p>Please pick the first day.</p>;
    if (range?.from) {
      if (!range.to) {
        footer = <p>{format(range.from, 'PPP')}</p>;
      } else if (range.to) {
        footer = (
          <p>
            {format(range.from, 'PPP')}–{format(range.to, 'PPP')}
          </p>
        );
      }
    }

    let userId
    if(user){
        userId = user.id
    } else {
        userId = null
    }


    const routeChange = () => {
        let path = `/users/${userId}`
        history.push(path)
    }


    function handleSubmit(e){
        e.preventDefault()
        const newReservation = {
            num_guests: numGuests,
            start_date: startDate,
            end_date: endDate
        }
        newReservation.listing_id = listingId
        newReservation.reserver_id = user.id

        if(!reservationId){
            // dispatch(createReservation(newReservation))
            //     .catch(async (res) => {
            //         let data = await res[0]
            //         if (data){
            //             setErrors([data]);
            //             // setErrors([data.start_date]);
            //             //double check what seterrors expects as a arg
            //         }
            //     })

                dispatch(createReservation(newReservation))
                .then(routeChange)
                .catch(async (res) => {
                    let data = await res[0]
                    if (data){
                        setErrors([data]);
                        // setErrors([data.start_date]);
                        //double check what seterrors expects as a arg
                    }
                })


        } else {
            newReservation.id = reservationId
            newReservation.listing_id = reservation.listingId
            dispatch(updateReservation(newReservation))
            // .catch(async (res) => {
            //     let data = await res[0]
            //     if (data){
            //         setErrors([data]);
            //         // setErrors([data.start_date]);
            //         //double check what seterrors expects as a arg
            //     }
            // })
            // routeChange()
        }
        
        // routeChange()
    }



    return (
        <>
            <div id='calender-container'>
                <div>{errors}</div>
                <DayPicker
                    id="test"
                    mode="range"
                    defaultMonth={formattedToday}
                    selected={range}
                    footer={footer}
                    onSelect={setRange}
                    disabled={disabledDays}
                />
                {/* <button id='reservation-button' onClick={handleSubmit}>Submit</button> */}
                {userId === null ? <button disabled className='disabled-button' id='disabled-reservation-button'>Submit</button> : <button id='reservation-button' onClick={handleSubmit}>Submit</button> }
            </div>
        </>
    )
}


export default ListsingReservationForm


