import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import ReservationIndex from "../Reservations/ReservationIndex"
import Navigation from "../Navigation"
import React, { useState, useEffect } from 'react';


const ProfilePage = () => {
    const {userId} = useParams()

    //ADD VARIABLE HERE ATTACHED TO RESERVATION DATES, TO TRIGGER A REFRESH OF THE PAGE IF THESE VARIABLES ARE CHANGED DUE TO AN EDIT OF RESERVATION
    useEffect(() => {

    }, []) 

    return(
        <>
        <div id='profile-page-wrapper'>
            <Navigation />      

            {/* Reservations user has made */}
            <div>
                <h1 id='booked-trips'>Booked Trips</h1>
                <ReservationIndex />
            </div>

            {/* Reviews the user has made */}
        </div>
        </>
    )
}


export default ProfilePage