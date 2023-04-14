import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import ReservationIndex from "../Reservations/ReservationIndex"
import Navigation from "../Navigation"

const ProfilePage = () => {
    const {userId} = useParams()

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