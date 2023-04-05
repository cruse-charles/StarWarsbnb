// import TotalPriceButton from "./TotalPriceButton"
import { fetchListings, getListings } from "../../listings"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import Navigation from "../Navigation";
import Carousel from "../Carousel";
import ListingIndexItem from "./ListingIndexItem"
import "./Listings.css"

function ListingsIndex() {

    const dispatch = useDispatch();
    const listings = useSelector(getListings)
    
    useEffect(() => {
        dispatch(fetchListings())
    }, [dispatch])


    return (
        <>
            <Navigation />
            <Carousel />
            <div id='listings-grid'>
                {listings.map((listing) => {
                    return <ListingIndexItem listing={listing} key={listing.id} />
                })}
            </div>
        </>
    )
}


export default ListingsIndex