import { useDispatch, useSelector } from "react-redux"
import { fetchReservations, getUserReservations } from "../../reservations"
import ReservationIndexItem from "./ReservationIndexItem"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { useEffect } from "react"



const ReservationIndex = () => {
    const dispatch = useDispatch()
    const {userId} = useParams()
    const reservations = useSelector(getUserReservations(userId))
// debugger
    
    useEffect(() => {
        dispatch(fetchReservations(userId))
    }, [userId, dispatch])

    return (
        <>
        <div id='reservation-wrapper'>
            <div id='listing-reservation-container'>
                <div>Reservation Container</div>
                {
                    reservations.map((reservation) => {
                        return <ReservationIndexItem reservation = {reservation} key={reservation.id} />
                    })
                }
            </div>
        </div>
        </>
    )
}


export default ReservationIndex

