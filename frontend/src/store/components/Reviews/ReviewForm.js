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
    const [errors, setErrors] = useState([])

    const [header, setHeader] = useState('Write a review!')
    const [body, setBody] = useState()
    const [cleanliness, setCleanliness] = useState()
    const [communication, setCommunication] = useState()
    const [checkIn, setCheckIn] = useState()
    const [accuracy, setAccuracy] = useState()
    const [location, setLocation] = useState()
    const [value, setValue] = useState()

    const changeHandlers = {
        "Cleanliness" : setCleanliness,
        "Communication" : setCommunication,
        "Check In" : setCheckIn,
        "Accuracy" : setAccuracy,
        "Location" : setLocation,
        "Value" : setValue
    }

    const routeChange = () => {
        let path = `/listings/${listingId}`
        history.push(path)
    }

    //real code below
    // useEffect(() => {
    //     if(reviewId){
    //         dispatch(fetchReview(reviewId))
    //         setHeader('Edit your review:')
    //         setBody(review.body)
    //         setCleanliness(review.cleanliness)
    //         setCommunication(review.communication)
    //         setCheckIn(review.checkIn)
    //         setAccuracy(review.accuracy)
    //         setLocation(review.location)
    //         setValue(review.value)
    //         setErrors([])
    //     }
    // }, [dispatch, reviewId])
    //real code above


    //chat code below
    useEffect(() => {
        if (reviewId) {
          dispatch(fetchReview(reviewId))
            .then(review => {
              setHeader('Edit your review:')
              setBody(review.body)
              setCleanliness(review.cleanliness)
              setCommunication(review.communication)
              setCheckIn(review.check_in)
              setAccuracy(review.accuracy)
              setLocation(review.location)
              setValue(review.value)
              setErrors([])
      
              // Set the defaultChecked value for each category
              setCleanlinessStars(createCategoryStars('Cleanliness', review.cleanliness))
              setCommunicationStars(createCategoryStars('Communication', review.communication))
              setCheckInStars(createCategoryStars('Check In', review.check_in))
              setAccuracyStars(createCategoryStars('Accuracy', review.accuracy))
              setLocationStars(createCategoryStars('Location', review.location))
              setValueStars(createCategoryStars('Value', review.value))
            })
        }
    }, [dispatch, reviewId])
    //chat code above




    // const createCategoryStars = (category, rating, setRating) => {
    const createCategoryStars = (category) => {


        return (

            <div id='individual-review-container'>
                <h2>{category}</h2>
                <label className="fa-solid fa-star fa-xl">1 
                {/* ADDED DEFAULT CHECK TO ALL THESE INPUT ACCORDING TO CHAT */}
                    <input required className="star" type='radio' name={category} value='1' onChange={(e) => {changeHandlers[category](e.target.value)}} defaultChecked={initialValue === 1}/>
                </label>
                <label className="fa-solid fa-star fa-xl">2 
                    <input required className="star" type='radio' name={category} value='2' onChange={(e) => {changeHandlers[category](e.target.value)}} defaultChecked={initialValue === 2}/>
                </label>
                <label className="fa-solid fa-star fa-xl">3 
                    <input required className="star" type='radio' name={category} value='3' onChange={(e) => {changeHandlers[category](e.target.value)}} defaultChecked={initialValue === 3}/>
                </label>
                <label className="fa-solid fa-star fa-xl">4 
                    <input required className="star" type='radio' name={category} value='4' onChange={(e) => {changeHandlers[category](e.target.value)}} defaultChecked={initialValue === 4}/>
                </label>
                <label className="fa-solid fa-star fa-xl">5 
                    <input required className="star" type='radio' name={category} value='5' onChange={(e) => {changeHandlers[category](e.target.value)}} defaultChecked={initialValue === 5}/>
                </label>
            </div>
        )
    }

    function handleSubmit(e){
    // const handleSubmit = (e) => {
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
            .then(routeChange)
            .catch(async (res) => {
                // let data = await res[0]
                let data = await res
                if (data){
                    setErrors(data)
// debugger
                }
            })
        } else {
// debugger
            dispatch(createReview(newReview))
            .then(routeChange)
            .catch(async (res) => {
                // let data = await res[0]
                let data = await res
                if (data){
                    setErrors(data)
// debugger
                }
            })
        }

        // history.push(`/listings/${listingId}`)

    }

    function changeBody(e){
        setBody(e.target.value)
    }

// debugger
    return (
        <>
        {/* <Link to={`/listings/${listing.id}`}>Back</Link> */}
        <form id='review-container'>
            <h1>{header}</h1>
            {/* <div id='rf-errors'>{errors}</div> */}
            <ul id='rf-errors'>
                {errors.map((error, i) => (<li key={i}>{error}</li>))}
            </ul>
            {createCategoryStars('Cleanliness')}
            {createCategoryStars('Communication')}
            {createCategoryStars('Check In')}
            {createCategoryStars('Accuracy')}
            {createCategoryStars('Location')}
            {createCategoryStars('Value')}
            <br></br>
            <h2>Leave a comment...</h2>
                <textarea required id='review-form-comment' value={body} onChange={changeBody}></textarea>
                {/* <textarea required id='review-form-comment' placeholder={body} onChange={(e) => setBody(e.target.value)}></textarea> */}
                {/* <input type='text' required id='review-form-comment' value={body} onChange={changeBody}></input> */}
            <br></br>
            <button type='submit' id='review-form-button' onClick={handleSubmit} >Submit</button>
            {/* <input type='submit' id='review-form-button' onClick={handleSubmit} >Submit</input> */}
        </form>
        </>
    )
}


export default ReviewForm