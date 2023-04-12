// import { DateRange, DayPicker } from 'react-day-picker';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import React, { useState, useEffect } from 'react';
import { addDays, format } from 'date-fns';
import { getReservation } from '../../reservations';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { createReservation } from '../../reservations';

let today = new Date(Date.now())
// let day = today.getDay()
let day = today.getDate()
let month = today.getMonth()
let year = today.getFullYear()

const formattedToday = new Date(year, month, day);
const formattedYesterday = new Date(year, month, day - 1);
// debugger

// const pastMonth = new Date(2023, 2, 15);


const ListsingReservationForm = () => {
    const {listingId, reservationId} = useParams()
    let user = useSelector((state) => (state.session.user))
    const reservation = useSelector(getReservation(reservationId))
    const dispatch = useDispatch()
    const [numGuests, setNumGuests] = useState(0)
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()

    // const defaultSelected: DateRange = {
    //     from: pastMonth,
    //     to: addDays(pastMonth, 4)
    // };
    // const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

    // const [range, setRange] = useState(Date.today)
    const [range, setRange] = useState()
// console.log(range)
// console.log(range?.from)
// console.log(range?.to)

    useEffect(() => {
        if(range){
            setStartDate(range.from)
            setEndDate(range.to)
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

    // const disabledDays = [{from: new Date(2020, 1, 1), to: new Date(Date.now())}]
    const disabledDays = [{from: new Date(2020, 1, 1), to: formattedYesterday}]

// debugger

    function handleSubmit(e){
// debugger
        e.preventDefault()
        const newReservation = {
            num_guests: numGuests,
            start_date: startDate,
            end_date: endDate
        }
// debugger
        newReservation.listing_id = listingId
        newReservation.reserver_id = user.id
// debugger
        if(!reservationId){
            dispatch(createReservation(newReservation))
        }
    }


    return (
        <>
            <div>
            <DayPicker
                id="test"
                mode="range"
                defaultMonth={formattedToday}
                selected={range}
                footer={footer}
                onSelect={setRange}
                disabled={disabledDays}
            />
            <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}


export default ListsingReservationForm


