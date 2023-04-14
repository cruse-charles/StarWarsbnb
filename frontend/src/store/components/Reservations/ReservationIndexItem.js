import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min"
import { deleteReservation } from "../../reservations"
import { useDispatch } from "react-redux"

const ReservationIndexItem = ({reservation}) => {
    const dispatch = useDispatch()
    const {userId} = useParams()
    

    function handleDelete(e) {
        e.preventDefault()
        dispatch(deleteReservation(reservation.id))
    }

    function addDays(date, days) {
        date.setDate(date.getDate() + days);
        return date
    }

    const beginDate = new Date(reservation.startDate)
    const newBeginDate = addDays(beginDate, 1)
    const formattedStartDate = newBeginDate.toDateString()


    // console.log('reservation Start Date')
    // console.log(reservation.startDate)
    // console.log('beginDate')
    // console.log(beginDate)
    // console.log('formattedStartDate')
    // console.log(formattedStartDate)
    
    const endingDate = new Date(reservation.endDate)
    const newEndingDate = addDays(endingDate, 1)    
    const formattedEndDate = newEndingDate.toDateString()

    return(
        <div id='reservation-card'>
            <div id='photo-container'>
                <img id='reservation-photo' src={reservation.listingPhoto?.[0]}></img>
            </div>
            <div id='reservation-card-information-wrapper'>
                <div id='information-container'>
                    <div id='reservastion-listing-title'><h1>{reservation.listingTitle}</h1></div>
                    <div id='reservation-listing-dates'>{formattedStartDate}<br></br> - <br></br>{formattedEndDate}</div>
                    <div id='edit-remove-container'>
                        <Link id='edit' to={`/reservations/${reservation.id}/edit`}>Edit your reservation</Link>
                        <Link id='remove' onClick={handleDelete}>Delete your reservation</Link>
                    </div>
                </div>
                {/* <div id='description-container'>
                    {reservation.listingDescription}
                </div> */}
            </div>
        </div>
    )

}

export default ReservationIndexItem