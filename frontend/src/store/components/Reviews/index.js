import { useDispatch, useSelector } from "react-redux"
import { fetchReviews, getListingReviews } from "../../reviews"
import { useParams } from 'react-router-dom'
import { useEffect } from "react"
import ReviewIndexItem from './ReviewIndexItem'



const ListingReviews = () => {
    const dispatch = useDispatch()
    const {listingId} = useParams()
    const reviews = useSelector(getListingReviews(listingId))
    

    useEffect(() => {
        
        dispatch(fetchReviews(listingId))
    }, [listingId, dispatch])

    
    if(!reviews) {
        return null;
    }

    return (
        <>
            {
                reviews.map((review) => {
                    return <ReviewIndexItem review={review} key={review.id} />
                })
            }
        </>
    )
}

export default ListingReviews