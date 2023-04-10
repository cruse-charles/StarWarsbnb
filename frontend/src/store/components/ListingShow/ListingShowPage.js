import { useDispatch, useSelector } from "react-redux"
import { useParams, Link } from "react-router-dom/cjs/react-router-dom.min";
import { fetchListing, getListing } from "../../listings";
import { useEffect } from "react";
import Navigation from "../Navigation";
import './ListingShowPage.css'
import testPhoto from '../../../../src/assets/tatooinehome.png'
import ListingReviews from "../Reviews";

const ListingShowPage = () => {
    const dispatch = useDispatch();
    const {listingId} = useParams()
    //this actually needs to match with the url wildcard in the APP route, so that's how we can always get the right one
    const listing = useSelector(getListing(listingId))

    useEffect(() => {
    // debugger
        dispatch(fetchListing(listingId))
    // debugger
    }, [listingId, dispatch])


    if(!listing) {
        return null;
    }
// debugger
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
                    {/* <img className='main-img'src={testPhoto}/> */}
                    <img className='main-img'src={listing?.photoUrls?.[0]} alt='listing'/>
                    <img className='small-img' src={testPhoto} alt='listing'/>
                    {/* <img className='main-img'src={listing?.photoUrls?.[1]} alt='listing'/> */}
                    <img className='small-img' src={testPhoto} alt='listing'/>
                    <img id='top-right-pic' className='small-img' src={testPhoto} alt='listing'/>
                    <img id='bottom-right-pic'className='small-img' src={testPhoto} alt='listing'/>
                </div>
            </div>
            <div id='bottom-portion'>
                <div id='information-wrapper'>
                    <div id='information-container'>                        
                        <div id='hosted-by-container'>
                            <h1>Entire home hosted by {listing.listerId}</h1>
                            <h2>4 guests 2 bedrooms 3 beds 1.5 baths</h2>
                        </div>
                        <div id='highlights-container'>
                            highlights container
                        </div>
                        <div id='air-cover-container'>
                            air cover portion
                        </div>
                        <div id='description-container'>
                            <h2>{listing.description}</h2>
                        </div>
                        <div id='icons-container'>
                            Icons
                        </div>
                        <div id='calendar-container'>
                            Calendar container
                        </div>
                    </div>
                    <div id='reservation-container'>
                        Reservation
                    </div>
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