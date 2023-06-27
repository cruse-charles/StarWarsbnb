import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import { updateReview, createReview, fetchReview, getReview } from '../../reviews';
import './ReviewForm.css';

const ReviewForm = () => {
    const dispatch = useDispatch();
    const {listingId, reviewId} = useParams();
    let user = useSelector((state) => (state.session.user));
    let review = useSelector(getReview(reviewId));
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [header, setHeader] = useState('Write a review!');
    const [body, setBody] = useState();
    const [cleanliness, setCleanliness] = useState();
    const [communication, setCommunication] = useState();
    const [checkIn, setCheckIn] = useState();
    const [accuracy, setAccuracy] = useState();
    const [location, setLocation] = useState();
    const [value, setValue] = useState();
    const changeHandlers = {
        "Cleanliness" : setCleanliness,
        "Communication" : setCommunication,
        "Check In" : setCheckIn,
        "Accuracy" : setAccuracy,
        "Location" : setLocation,
        "Value" : setValue
    };

    //Redirect to listing after submitting review
    const routeChange = () => {
        let path = `/listings/${listingId}`;
        history.push(path);
    }

    //Pull previous review's data if editng a review
    useEffect(() => {
        if(reviewId){
            dispatch(fetchReview(reviewId));
            setHeader('Edit your review:');
            setBody(review.body);
            setCleanliness(review.cleanliness);
            setCommunication(review.communication);
            setCheckIn(review.checkIn);
            setAccuracy(review.accuracy);
            setLocation(review.location);
            setValue(review.value);
            setErrors([]);
        }
    }, [dispatch, reviewId]);

    //Create 5 starred radio buttons per category
    const createCategoryStars = (category) => {
        return (
            <div id='individual-review-container'>
                <h2>{category}</h2>
                <label className="fa-solid fa-star fa-xl">1 
                    <input required className="star" type='radio' name={category} value='1' onChange={(e) => {changeHandlers[category](e.target.value)}}/>
                </label>
                <label className="fa-solid fa-star fa-xl">2 
                    <input required className="star" type='radio' name={category} value='2' onChange={(e) => {changeHandlers[category](e.target.value)}}/>
                </label>
                <label className="fa-solid fa-star fa-xl">3 
                    <input required className="star" type='radio' name={category} value='3' onChange={(e) => {changeHandlers[category](e.target.value)}}/>
                </label>
                <label className="fa-solid fa-star fa-xl">4 
                    <input required className="star" type='radio' name={category} value='4' onChange={(e) => {changeHandlers[category](e.target.value)}}/>
                </label>
                <label className="fa-solid fa-star fa-xl">5 
                    <input required className="star" type='radio' name={category} value='5' onChange={(e) => {changeHandlers[category](e.target.value)}}/>
                </label>
            </div>
        )
    }

    //Submit review
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
        };

        newReview.listing_id = listingId;
        newReview.reviewer_id = user.id;
        if(reviewId){
            newReview.id = reviewId
            dispatch(updateReview(newReview))
            .then(routeChange)
            .catch(async (res) => {
                // let data = await res[0]
                let data = await res
                if (data){
                    setErrors(data)
                }
            })
        } else {
            dispatch(createReview(newReview))
            .then(routeChange)
            .catch(async (res) => {
                // let data = await res[0]
                let data = await res
                if (data){
                    setErrors(data)
                }
            })
        }
    }

    //Changing input for review's for change in selection
    function changeBody(e){
        setBody(e.target.value)
    }

    return (
        <>
        <form id='review-container'>
            <h1>{header}</h1>
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
            <br></br>
            <button type='submit' id='review-form-button' onClick={handleSubmit} >Submit</button>
        </form>
        </>
    )
}
export default ReviewForm