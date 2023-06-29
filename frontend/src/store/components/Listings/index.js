import { fetchListings, getListings } from "../../listings";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Navigation from "../Navigation";
import Carousel from "../Carousel";
import ListingIndexItem from "./ListingIndexItem";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import "./Listings.css";
import Map from '../Map/Map'

function ListingsIndex() {

    //Acquiring all listings
    const dispatch = useDispatch();
    const listings = useSelector(getListings);
    const [showMap, setShowMap] = useState(false);
    const history = useHistory();

    
    //Rendering Listings
    useEffect(() => {
        dispatch(fetchListings());
    }, [dispatch]);

    const toggleMap = () => {
        setShowMap(!showMap)
    }

    const routeChange = (listing) => {
        let path = `/listings/${listing.id}`;
        history.push(path);
    }

    return (
        <>
        <div id='listings-page-wrapper'>
            {/* Navigation bar with links and searchbar */}
            <Navigation />

            {/* Carousel to be added for filtering */}
            {/* <Carousel /> */}

            {showMap ? (
                <div id='listings-map'>
                    <Map />
                </div>
            ) : (
                <div id='listings-grid'>
                    {listings.map((listing) => {
                        return <ListingIndexItem listing={listing} key={listing.id} routeChange={routeChange}/>
                    })}
                </div>
            )}
            {/* Displaying all listings */}

            <button id="show-map-button" onClick={toggleMap}>
                {showMap ? (
                    <>
                        Show List <i className="fa-solid fa-list"></i> 
                    </>
                ) : (
                    <>
                    Show Map <i className="fa-solid fa-map"></i> 
                    </>
                )}
            </button>
        </div>
        </>
    )
}


export default ListingsIndex