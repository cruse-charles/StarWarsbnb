import csrfFetch from "./csrf"



export const RECEIVE_REVIEWS = 'reviews/RECEIVE_REVIEWS'
export const RECEIVE_REVIEW = 'reviews/RECEIVE_REVIEW'
export const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW'


const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
})

const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
})

const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
})


export const getListingReviews = (listingId) => state => {    
    const reviews = state.reviews ? Object.values(state.reviews) : []
    const filteredReviews = reviews.filter((review) => (review.listingId == listingId))
    return filteredReviews
}

export const getReview = (reviewId) => state => {
    if(state.reviews){
        return state.reviews[reviewId]
    }else{
        return null
    }
}


export const fetchReviews = (listingId) => async(dispatch) => {
    const response = await csrfFetch(`/api/listings/${listingId}/reviews`)
    
    if(response.ok){
        const data = await response.json()
        dispatch(receiveReviews(data))
    }
}

export const fetchReview = (reviewId) => async(dispatch) => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`)

    if(response.ok){
        const data = await response.json()
        dispatch(receiveReview(data))
    }
}

export const createReview = (review) => async(dispatch) => {
    const response = await csrfFetch(`/api/reviews/`, {
        method: "POST",
        body: JSON.stringify(review),
        headers: {'Content-Type': 'application/json'}
    })

    const data = await response.json()
    dispatch(receiveReview(data))
}

export const updateReview = (review) => async(dispatch) => {
    const response = await csrfFetch(`/api/reviews/${review.id}`, {
        method: "PATCH",
        body: JSON.stringify(review),
        headers: {'Content-Type': 'application/json'}
    })

    const data = await response.json()
    dispatch(receiveReview(data))
}

export const deleteReview = (reviewId) => async(dispatch) => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "DELETE"
    })
    
    if(response.ok){
        dispatch(removeReview(reviewId))
    }
}


const reviewReducer = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_REVIEWS:
            return {... state, ...action.reviews}
        case RECEIVE_REVIEW:
            return {...state, [action.review.id]: action.review}
        case REMOVE_REVIEW:
            const newState = {...state}
            delete newState[action.reviewId]
            return newState
        default:
            return state
    }

}

export default reviewReducer