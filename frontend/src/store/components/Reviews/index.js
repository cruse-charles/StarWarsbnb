import { useDispatch, useSelector } from "react-redux"
import { fetchReviews, getReviews } from "../../reviews"
import { useParams } from 'react-router-dom'
import { useEffect } from "react"
import ReviewIndexItem from './ReviewIndexItem'



const ListingReviews = () => {
    const dispatch = useDispatch()
    const reviews = useSelector(getReviews)
    // console.log(reviews)
    const {listingId} = useParams()
    // console.log(listingId)

    // dispatch(fetchReviews(1))
    useEffect(() => {
// debugger
        // dispatch(fetchReviews(listingId))
        dispatch(fetchReviews(listingId))
        console.log('inside use Effect, after dispatch')
    }, [listingId, dispatch])
    
    if(!reviews) {
        return null;
    }

    return (
        <>
        <h1>Reviews</h1>
            <div>
                {/* {reviews.map((review) => {
                    return (review.body)
                })} */}
                {
                    reviews.map((review) => {
                        return <ReviewIndexItem review={review} key={review.id} />
                    })
                }
            </div>
        </>
    )
}

export default ListingReviews