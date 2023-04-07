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

    return (
        <>
        <div id='listings-page'>
            <Navigation />
            <div id='title-container'>
                <h1>{listing.title}</h1>
            </div>
            <div id='images-wrapper'>
                <div id='images-container'>
                    <img className='main-img'src={testPhoto}/>
                    {/* <img className='main-img'src={listing.photoUrls[0]} alt='listing'/> */}
                    <img className='small-img' src={testPhoto} alt='listing'/>
                    <img className='small-img' src={testPhoto} alt='listing'/>
                    <img id='top-right-pic' className='small-img' src={testPhoto} alt='listing'/>
                    <img id='bottom-right-pic'className='small-img' src={testPhoto} alt='listing'/>
                </div>
            </div>
            <div id='information-container'>
                <h2>{listing.description}</h2>
            </div>
            <div id='reviews-container'>
                {/* <h2>reviews</h2> */}
                <Link to={`/listings/${listingId}/reviews/new`}>Write a review!</Link>
                <ListingReviews />
            </div>
        </div>
        </>
    )



}


export default ListingShowPage