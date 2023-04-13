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
            <div className='reviewer-name'>
                <h2>{review.reviewerName}</h2>
                <p>review date</p>
            </div>
            <div>{review.body}</div><br></br>
            <div id='edit-remove-container'>
                <Link to={`/listings/${listingId}/reviews/${review.id}/edit`}>
                    Edit
                </Link>
                <Link onClick={handleDelete}>
                    Remove
                </Link>
            </div>
            
        </div>
    )
}

export default ReviewIndexItem