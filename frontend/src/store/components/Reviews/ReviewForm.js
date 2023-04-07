import { useDispatch, useSelector } from "react-redux"
import { useParams,Link } from "react-router-dom/cjs/react-router-dom.min"
import { useEffect, useState } from "react"
import { updateReview, createReview, fetchReview } from '../../reviews'

const ReviewForm = () => {
    const dispatch = useDispatch()
    const {listingId, reviewId} = useParams()
    // let review = useSelector(getReview)
    let user = useSelector((state) => (state.session.user))


    const [body, setBody] = useState('Required')
    const [cleanliness, setCleanliness] = useState(1)
    const [communication, setCommunication] = useState(1)
    const [checkIn, setCheckIn] = useState(1)
    const [accuracy, setAccuracy] = useState(1)
    const [location, setLocation] = useState(1)
    const [value, setValue] = useState(1)

    useEffect(() => {
        if(reviewId){
            dispatch(fetchReview(reviewId))
            
        }
    }, [dispatch, reviewId])
//ADD MORE TO THE USE EFFECT, MAKE A [HEADER,SETHEADER] FOR WRITING/UPDATING LIKE IN POST EXAMPLE
//FIND OUT HOW THE SUBMIT GOES INTO THE DATABASE, I GUESS IT'S THROUGH CREATE REVIEW BUT STILL

    const createCategoryStars = (category, rating, setRating) => {
        return (
            <div>
                <h2>{category}</h2>
                <label> 1
                    <input type='radio' value={rating}/>
                </label>
                <label> 2
                    <input type='radio' value={rating}/>
                </label>
                <label> 3
                    <input type='radio' value={rating}/>
                </label>
                <label> 4
                    <input type='radio' value={rating}/>
                </label>
                <label> 5
                    <input type='radio' value={rating}/>
                </label>
            </div>
        )
    }

    function handleSubmit(e){
        e.preventDefault()
        const newReview = {
            body,
            cleanliness,
            communication,
            check_in: checkIn,
            accuracy,
            location,
            value
        }
        newReview.listing_Id = listingId
        newReview.reviewer_Id = user.id
        if(reviewId){
            newReview.id = reviewId
            dispatch(updateReview(newReview))
        } else {
            dispatch(createReview(newReview))
        }

    }

    return (
        <>
        {/* <Link to={`/listings/${listing.id}`}>Back</Link> */}
        <form>
            <h1>Write a Review!</h1>
            {createCategoryStars('Cleanliness', cleanliness)}
            {createCategoryStars('Communication', communication)}
            {createCategoryStars('Check In', checkIn)}
            {createCategoryStars('Accuracy', accuracy)}
            {createCategoryStars('Location', location)}
            {createCategoryStars('Value', value)}
            <label> Write something for... <br/>
                <textarea></textarea>
            </label>
            <button onClick={handleSubmit} value={body}>Submit</button>
            {/* <button value={body}>Submit</button> */}
        </form>
        </>
    )
}


export default ReviewForm