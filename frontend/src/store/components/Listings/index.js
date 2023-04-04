import TotalPriceButton from "./TotalPriceButton"
import { fetchListings, getListings } from "../../listings"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import ListingIndexItem from "./ListingIndexItem"
import "./Listings.css"

function Listings() {

    const dispatch = useDispatch();
    const listings = useSelector(getListings)
    
    useEffect(() => {
        dispatch(fetchListings())
    }, [dispatch])


    return (
        <>
            <TotalPriceButton />
            <h1>Listings Section</h1>
            <ul>
                {listings.map((listing) => {
                    return <ListingIndexItem listing={listing} key={listing.id} />
                })}
            </ul>
        </>
    )
}
// Kind of failing to see the point of a ListingsIndexItem like was done in exam
// also my listing.description isn't working for some reason?? But the other elements are..
export default Listings