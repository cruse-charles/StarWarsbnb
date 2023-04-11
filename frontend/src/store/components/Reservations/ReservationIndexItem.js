import { useHistory, Link, useParams } from "react-router-dom/cjs/react-router-dom.min"
import { deleteReservation } from "../../reservations"
import { useDispatch } from "react-redux"

const ReservationIndexItem = ({reservation}) => {
    const dispatch = useDispatch()
    const {userId} = useParams()
    // const history = useHistory
    

    function handleDelete(e) {
        e.preventDefault()
        dispatch(deleteReservation(reservation.id))
        // might need this history push but unsure actually
        // history.push(`/users/${userId}`)
    }


    return(
        <div id='reservation-card'>
            <div>{reservation.start_date} - {reservation.end_date}</div>
            <Link to={`/reservations/${reservation.id}/edit`}>Edit</Link>
            {/* DOES IT MATTER WHAT THE EDIT IS? SHOULD I STICK TO A USER/RESERVATIONS/EDIT? THIS IS GONNA BE A BITCH TO MAKE */}
            <Link onClick={handleDelete}>Remove</Link>
        </div>
    )

}

export default ReservationIndexItem