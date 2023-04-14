import { useParams, Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { deleteReview } from "../../reviews";
import { useDispatch, useSelector } from "react-redux";

const ReviewIndexItem = ({review}) => {
    
    const {listingId} = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.session.user)
    
    function handleDelete(e) {
        e.preventDefault()
        dispatch(deleteReview(review.id))
        history.push(`/listings/${listingId}`)
    }

    const checkUser = () => {
        if(!user) return false
        // debugger
        if(user.id === review.reviewerId) {
            return true
        } else {
            return false
        }
        // debugger
    }
// debugger
    return (
        <div className='review-card'>
            <div className='reviewer-name'>
                <h2>{review.reviewerName}</h2>
                <p>review date</p>
            </div>
            <div>{review.body}</div><br></br>
            
            {checkUser() && (<div id='edit-remove-container'>
                <Link to={`/listings/${listingId}/reviews/${review.id}/edit`}>
                    Edit
                </Link>
                <Link onClick={handleDelete}>
                    Remove
                </Link>
            </div>)}
            
        </div>
    )
}

export default ReviewIndexItem