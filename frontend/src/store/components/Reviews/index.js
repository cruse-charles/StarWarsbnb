import { useDispatch, useSelector } from "react-redux"
import { fetchReviews, getListingReviews } from "../../reviews"
import { useParams } from 'react-router-dom'
import { useEffect } from "react"
import ReviewIndexItem from './ReviewIndexItem'



const ListingReviews = () => {
    const dispatch = useDispatch()
    // console.log(reviews)
    const {listingId} = useParams()
    const reviews = useSelector(getListingReviews(listingId))
    let reviewsList
    // console.log(listingId)

    // dispatch(fetchReviews(1))
    useEffect(() => {
// debugger
        // dispatch(fetchReviews(listingId))
        dispatch(fetchReviews(listingId))
        // console.log('inside use Effect, after dispatch')
    }, [listingId, dispatch])

//     useEffect(() => {
// debugger
//         reviewsList = reviews.map((review) => {
//             return <ReviewIndexItem review={review} key={review.id} />
//         })
//     }, [reviews])
    
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
            {/* {reviewsList} */}
        </>
    )
}

export default ListingReviews