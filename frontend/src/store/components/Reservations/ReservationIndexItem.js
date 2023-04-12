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
            <div>{reservation.listingTitle}</div>
            {/* <div>Reservation Card</div> */}
            {/* <div>{reservation.reserverId}</div> */}
            {/* <div>{reservation.startDate} - {reservation.endDate}</div> */}
            <div>{formattedStartDate} - {formattedEndDate}</div>
            <Link to={`/reservations/${reservation.id}/edit`}>Edit</Link>
            {/* DOES IT MATTER WHAT THE EDIT IS? SHOULD I STICK TO A USER/RESERVATIONS/EDIT? THIS IS GONNA BE A BITCH TO MAKE */}
            <Link onClick={handleDelete}>Remove</Link>
        </div>
    )

}

export default ReservationIndexItem