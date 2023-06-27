import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { deleteReservation } from "../../reservations";
import { useDispatch } from "react-redux";

const ReservationIndexItem = ({reservation}) => {
    const dispatch = useDispatch();
    const {userId} = useParams();
    
    //Deleting a reservation
    function handleDelete(e) {
        e.preventDefault();
        dispatch(deleteReservation(reservation.id));
    }

    //Adding one day to dates due to receiving a late timezone from data
    function addDays(date, days) {
        date.setDate(date.getDate() + days);
        return date;
    }

    //Formatting start dates to make reservations
    const beginDate = new Date(reservation.startDate);
    const newBeginDate = addDays(beginDate, 1);
    const formattedStartDate = newBeginDate.toDateString();
    
    //Formatting end dates to make reservations
    const endingDate = new Date(reservation.endDate);
    const newEndingDate = addDays(endingDate, 1);
    const formattedEndDate = newEndingDate.toDateString();

    return(
        <div id='reservation-card'>
            {/* Photo for listing */}
            <div id='photo-container'>
                <img id='reservation-photo' src={reservation.listingPhoto?.[0]}></img>
            </div>

            {/* Grabbing reservation information to render */}
            <div id='reservation-card-information-wrapper'>
                <div id='information-container'>
                    <div id='reservastion-listing-title'><h1>{reservation.listingTitle}</h1></div>
                    <div id='reservation-listing-dates'>{formattedStartDate}<br></br> - <br></br>{formattedEndDate}</div>
                    <div id='edit-remove-container'>
                        <Link id='edit' to={`/reservations/${reservation.id}/edit`}>Edit your reservation</Link>
                        <Link id='remove' onClick={handleDelete}>Delete your reservation</Link>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ReservationIndexItem