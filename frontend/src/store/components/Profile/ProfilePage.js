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
                <div>Booked Trips</div>
                <ReservationIndex />
            </div>
            {/* Reviews the user has made */}
        </div>
        </>
    )
}


export default ProfilePage