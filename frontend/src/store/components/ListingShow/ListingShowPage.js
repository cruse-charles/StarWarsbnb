import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { fetchListing, getListing } from "../../listings";
import { useEffect } from "react";
import Navigation from "../Navigation";
import './ListingShowPage.css'
import testPhoto from '../../../../src/assets/tatooinehome.png'

const ListingShowPage = () => {
    const dispatch = useDispatch();
    const {listingId} = useParams()
    const listing = useSelector(getListing(listingId))

    useEffect(() => {
    // debugger
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
                <h1>{listing.title}</h1>
            </div>
            <div id='images-wrapper'>
                <div id='images-container'>
                    <img className='main-img'src={testPhoto}/>
                    <img className='small-img' src={testPhoto}/>
                    <img className='small-img' src={testPhoto}/>
                    <img id='top-right-pic' className='small-img' src={testPhoto}/>
                    <img id='bottom-right-pic'className='small-img' src={testPhoto}/>
                </div>
            </div>
            <div id='information-container'>
                <h2>{listing.description}</h2>
            </div>
            <div id='reviews-container'>
                <h2>reviews</h2>
            </div>
        </div>
        </>
    )



}


export default ListingShowPage