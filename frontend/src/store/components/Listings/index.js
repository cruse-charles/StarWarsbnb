import { fetchListings, getListings } from "../../listings";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Navigation from "../Navigation";
import Carousel from "../Carousel";
import ListingIndexItem from "./ListingIndexItem";
import "./Listings.css";
import Map from '../Map/Map'

function ListingsIndex() {

    //Acquiring all listings
    const dispatch = useDispatch();
    const listings = useSelector(getListings);
    
    //Rendering Listings
    useEffect(() => {
        dispatch(fetchListings());
    }, [dispatch]);


    return (
        <>
            {/* Navigation bar with links and searchbar */}
            <Navigation />

            {/* Carousel to be added for filtering */}
            {/* <Carousel /> */}

            {/* Displaying all listings */}
            <div id='listings-grid'>
                {listings.map((listing) => {
                    return <ListingIndexItem listing={listing} key={listing.id} />
                })}
            </div>

            <Map />
        </>
    )
}


export default ListingsIndex