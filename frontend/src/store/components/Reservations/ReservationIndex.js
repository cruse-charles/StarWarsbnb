import { useDispatch, useSelector } from "react-redux";
import { fetchReservations, getUserReservations } from "../../reservations";
import ReservationIndexItem from "./ReservationIndexItem";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import './ReservationIndex.css';



const ReservationIndex = () => {
    const dispatch = useDispatch();
    const {userId} = useParams();
    const reservations = useSelector(getUserReservations(userId));

    //Change reservations depending on userId
    useEffect(() => {
        dispatch(fetchReservations(userId));
    }, [userId, dispatch])


    return (
        <>
        <div id='reservation-wrapper'>
            <div id='listing-reservation-container'>
                {/* Mapping over reservations to create 'cards' for each and display them on page */}
                {
                    reservations.map((reservation) => {
                        return <ReservationIndexItem reservation = {reservation} key={reservation.id} />
                    })
                }
                {reservations.length === 0 &&
                    (<div>You currently have no reservations.</div>)
                }
            </div>
        </div>
        </>
    )
}


export default ReservationIndex

