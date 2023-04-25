import { useDispatch, useSelector } from "react-redux"
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { useEffect, useState } from "react"
import { updateReview, createReview, fetchReview, getReview } from '../../reviews'
import './ReviewForm.css'

const ReviewForm = () => {
    const dispatch = useDispatch()
    const {listingId, reviewId} = useParams()
    let user = useSelector((state) => (state.session.user))
    let review = useSelector(getReview(reviewId))
    const history = useHistory()

    const [header, setHeader] = useState('Write a review!')
    const [body, setBody] = useState('Required')
    const [cleanliness, setCleanliness] = useState(1)
    const [communication, setCommunication] = useState(1)
    const [checkIn, setCheckIn] = useState(1)
    const [accuracy, setAccuracy] = useState(1)
    const [location, setLocation] = useState(1)
    const [value, setValue] = useState(1)

    const changeHandlers = {
        "Cleanliness" : setCleanliness,
        "Communication" : setCommunication,
        "Check In" : setCheckIn,
        "Accuracy" : setAccuracy,
        "Location" : setLocation,
        "Value" : setValue
    }

    useEffect(() => {
        if(reviewId){
            dispatch(fetchReview(reviewId))
            setHeader('Edit your review:')
            setBody(review.body)
            setCleanliness(review.cleanliness)
            setCommunication(review.communication)
            setCheckIn(review.checkIn)
            setAccuracy(review.accuracy)
            setLocation(review.location)
            setValue(review.value)
        }
    }, [dispatch, reviewId])

    // const createCategoryStars = (category, rating, setRating) => {
    const createCategoryStars = (category) => {

        return (
            // <div>
            //     <h2>{category}</h2>
            //     <label> 1
            //         <input type='radio' name={category} value='1' onChange={(e) => {changeHandlers[category](e.target.value)}}/>
            //     </label>
            //     <label> 2
            //         <input type='radio' name={category} value='2' onChange={(e) => {changeHandlers[category](e.target.value)}}/>
            //     </label>
            //     <label> 3
            //         <input type='radio' name={category} value='3' onChange={(e) => {changeHandlers[category](e.target.value)}}/>
            //     </label>
            //     <label> 4
            //         <input type='radio' name={category} value='4' onChange={(e) => {changeHandlers[category](e.target.value)}}/>
            //     </label>
            //     <label> 5
            //         <input type='radio' name={category} value='5' onChange={(e) => {changeHandlers[category](e.target.value)}}/>
            //     </label>
            // </div>


            <div id='individual-review-container'>
                <h2>{category}</h2>
                <label className="fa-solid fa-star fa-xl">1 
                    <input className="star" type='radio' name={category} value='1' onChange={(e) => {changeHandlers[category](e.target.value)}}/>
                </label>
                <label className="fa-solid fa-star fa-xl">2 
                    <input className="star" type='radio' name={category} value='2' onChange={(e) => {changeHandlers[category](e.target.value)}}/>
                </label>
                <label className="fa-solid fa-star fa-xl">3 
                    <input className="star" type='radio' name={category} value='3' onChange={(e) => {changeHandlers[category](e.target.value)}}/>
                </label>
                <label className="fa-solid fa-star fa-xl">4 
                    <input className="star" type='radio' name={category} value='4' onChange={(e) => {changeHandlers[category](e.target.value)}}/>
                </label>
                <label className="fa-solid fa-star fa-xl">5 
                    <input className="star" type='radio' name={category} value='5' onChange={(e) => {changeHandlers[category](e.target.value)}}/>
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
        newReview.listing_id = listingId
        newReview.reviewer_id = user.id
        if(reviewId){
            newReview.id = reviewId
            dispatch(updateReview(newReview))
        } else {
            dispatch(createReview(newReview))
        }

        history.push(`/listings/${listingId}`)

    }

    function changeBody(e){
        setBody(e.target.value)
    }


    return (
        <>
        {/* <Link to={`/listings/${listing.id}`}>Back</Link> */}
        <form id='review-container'>
            <h1>{header}</h1>
            {createCategoryStars('Cleanliness')}
            {createCategoryStars('Communication')}
            {createCategoryStars('Check In')}
            {createCategoryStars('Accuracy')}
            {createCategoryStars('Location')}
            {createCategoryStars('Value')}
            <br></br>
            <h2>Leave a comment...</h2>
                <textarea id='review-form-comment'value ={body} onChange={changeBody}></textarea>
            <br></br>
            <button id='review-form-button'onClick={handleSubmit} >Submit</button>
        </form>
        </>
    )
}


export default ReviewForm