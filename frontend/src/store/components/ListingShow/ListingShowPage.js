import { useDispatch, useSelector } from "react-redux"
import { useParams, Link } from "react-router-dom/cjs/react-router-dom.min";
import { fetchListing, getListing } from "../../listings";
import { useEffect } from "react";
import Navigation from "../Navigation";
import './ListingShowPage.css'
import testPhoto from '../../../../src/assets/l2p1.png'
import ListingReviews from "../Reviews";
import ListsingReservationForm from "../Reservations/ListingReservationForm";

const ListingShowPage = () => {
    const dispatch = useDispatch();
    const {listingId} = useParams()
    //this actually needs to match with the url wildcard in the APP route, so that's how we can always get the right one
    const listing = useSelector(getListing(listingId))

    useEffect(() => {
        dispatch(fetchListing(listingId))
    }, [listingId, dispatch])


    if(!listing) {
        return null;
    }
    return (
        <>
        <div id='listings-page'>
            <Navigation />
            <div id='title-container'>
                <h1 id='title'>{listing.title}</h1><br></br>
                <div id='location'>{listing.city}, {listing.country}</div>
            </div>
            <div id='images-wrapper'>
                <div id='images-container'>
                    <img className='main-img'src={listing?.photoUrls?.[0]} alt='listing'/>
                    <img className='small-img' src={listing?.photoUrls?.[1]} alt='listing'/>
                    <img className='small-img' src={listing?.photoUrls?.[2]} alt='listing'/>
                    <img id='top-right-pic' className='small-img' src={listing?.photoUrls?.[3]} alt='listing'/>
                    <img id='bottom-right-pic'className='small-img' src={listing?.photoUrls?.[4]} alt='listing'/>
                </div>
            </div>
            <div id='bottom-portion'>
                <div id='information-wrapper'>
                    <div id='information-container'>                        
                        <div id='hosted-by-container'>
                            <h1>Entire home hosted by {listing.listerId}</h1>
                            <h2>4 guests 2 bedrooms 3 beds 1.5 baths</h2>
                        </div>
                        <div id='highlights-wrapper'>
                            <div className='highlight-container' id='highlight3'>
                                <div className='highlight-icon-container'><i className="fa-solid fa-medal fa-xl"></i></div>
                                <div className='highlight-text-container'>
                                    <h2>This host is a SuperHost</h2>
                                    <div>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</div>
                                </div>
                            </div>
                            <div className='highlight-container' id='highlight3'>
                                <div className='highlight-icon-container'><i className="fa-solid fa-location-dot fa-xl"></i></div>
                                <div className='highlight-text-container'>
                                    <h2>Great location</h2>
                                    <div>95% of recent guests gave the location a 5-star rating.</div>
                                </div>
                            </div>
                            <div className='highlight-container' id='highlight3'>
                                <div className='highlight-icon-container'><i className="fa-solid fa-calendar fa-xl"></i></div>
                                <div className='highlight-text-container'>
                                    <h2>Free cancellation within 48 hours.</h2>
                                    <div></div>
                                </div>
                            </div>

                            {/* <div>
                                <div className='highlight-container' id='highlight1'><i className="fa-solid fa-location-dot"></i></div>
                            </div>
                            <div>
                                <div className='highlight-container' id='highlight2'><i className="fa-solid fa-calendar"></i></div>
                            </div> */}
                        </div>
                        {/* <div id='air-cover-container'>
                            air cover portion
                        </div> */}
                        <div id='description-container'>
                            <h2>{listing.description}</h2>
                        </div>
                        <div id='icons-container'>
                            Icons
                        </div>
                        {/* <div id='calendar-container'>
                            Calendar container
                        </div> */}
                    </div>
                    {/* <div id='form-reservation-container'> */}
                        <ListsingReservationForm />
                    {/* </div> */}
                </div>
                <div id='reviews-wrapper'>
                    <div id='review-stats'>
                        <Link to={`/listings/${listingId}/reviews/new`}>Write a review!</Link><br></br>
                        <h2>review stats</h2>
                    </div>
                    <div id='reviews-container'>
                        <ListingReviews />
                    </div>
                </div>
            </div>
        </div>
        </>
    )



}


export default ListingShowPage