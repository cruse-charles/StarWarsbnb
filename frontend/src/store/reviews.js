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

const removeReview = (review) => ({
    type: REMOVE_REVIEW,
    review
})


export const getReviews = state => {    
    return state.reviews ? Object.values(state.reviews) : []
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
// debugger
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
debugger
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
    const response = await fetch(`/api/reviews/${reviewId}`, {
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
            delete newState[action.postId]
            return newState
        default:
            return state
    }

}

export default reviewReducer