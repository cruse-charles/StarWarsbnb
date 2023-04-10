import { useDispatch, useSelector } from "react-redux"
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { useEffect, useState } from "react"
import { updateReview, createReview, fetchReview, getReview } from '../../reviews'

const ReviewForm = () => {
    const dispatch = useDispatch()
    const {listingId, reviewId} = useParams()
    // let review = useSelector(getReview)
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
            <div>
                <h2>{category}</h2>
                <label> 1
                    <input type='radio' name={category} value='1' onChange={(e) => {changeHandlers[category](e.target.value)}}/>
                </label>
                <label> 2
                    <input type='radio' name={category} value='2' onChange={(e) => {changeHandlers[category](e.target.value)}}/>
                </label>
                <label> 3
                    <input type='radio' name={category} value='3' onChange={(e) => {changeHandlers[category](e.target.value)}}/>
                </label>
                <label> 4
                    <input type='radio' name={category} value='4' onChange={(e) => {changeHandlers[category](e.target.value)}}/>
                </label>
                <label> 5
                    <input type='radio' name={category} value='5' onChange={(e) => {changeHandlers[category](e.target.value)}}/>
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
        <form>
            <h1>{header}</h1>
            {/* {createCategoryStars('Cleanliness', cleanliness, setCleanliness)}
            {createCategoryStars('Communication', communication, setCommunication)}
            {createCategoryStars('Check In', checkIn, setCheckIn)}
            {createCategoryStars('Accuracy', accuracy, setAccuracy)}
            {createCategoryStars('Location', location, setLocation)}
            {createCategoryStars('Value', value, setValue)} */}
            {createCategoryStars('Cleanliness')}
            {createCategoryStars('Communication')}
            {createCategoryStars('Check In')}
            {createCategoryStars('Accuracy')}
            {createCategoryStars('Location')}
            {createCategoryStars('Value')}
            <label> Write something for... <br/>
                {/* <textarea defaultValue={body} onChange={changeBody}></textarea> */}
                <textarea value ={body} onChange={changeBody}></textarea>
            </label>
            <button onClick={handleSubmit} >Submit</button>
        </form>
        </>
    )
}


export default ReviewForm