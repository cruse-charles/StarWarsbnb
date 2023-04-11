import { useParams, Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { deleteReview } from "../../reviews";
import { useDispatch } from "react-redux";

const ReviewIndexItem = ({review}) => {
    
    const {listingId} = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    
    function handleDelete(e) {
        e.preventDefault()
        dispatch(deleteReview(review.id))
        history.push(`/listings/${listingId}`)
    }

    return (
        <div className='review-card'>
            <div className='reviewer-name'>{review.reviewerId}
                <p>review date</p>
            </div>
            <div>{review.body}</div><br></br>
            <Link to={`/listings/${listingId}/reviews/${review.id}/edit`}>
                Edit
            </Link>
            <Link onClick={handleDelete}>
                Remove
            </Link>
            
        </div>
    )
}

export default ReviewIndexItem