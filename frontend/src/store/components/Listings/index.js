import TotalPriceButton from "./TotalPriceButton"
import { fetchListings, getListings } from "../../listings"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

function Listings() {

    const dispatch = useDispatch();
    const listings = useSelector(getListings)
    
    useEffect(() => {
        dispatch(fetchListings())
    }, [])


    return (
        <>
            <TotalPriceButton />
            <h1>Listings Section</h1>
            {listings.map((listing) => {
                return [listing.address, listing.title, listing.description, listing.city, listing.country]
            })
            }
        </>
    )
}
// Kind of failing to see the point of a ListingsIndexItem like was done in exam
// also my listing.description isn't working for some reason?? But the other elements are..
export default Listings