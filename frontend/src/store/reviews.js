import csrfFetch from "./csrf"



export const RECEIVE_REVIEWS = 'reviews/RECEIVE_REVIEWS'
export const RECEIVE_REVIEW = 'reviews/RECEIVE_REVIEW'


const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews
})
// debugger



export const getReviews = state => {
    // debugger
    
    return state.reviews ? Object.values(state.reviews) : []
}



export const fetchReviews = (listingId) => async(dispatch) => {
    const response = await csrfFetch(`/api/listings/${listingId}/reviews`)
// debugger
    if(response.ok){
        const data = await response.json()
        dispatch(receiveReviews(data))
// debugger
    }
}

const reviewReducer = (state = {}, action) => {
// debugger
    switch(action.type) {
        case RECEIVE_REVIEWS:
            return {... state, ...action.reviews}
            default:
                return state
            }

}

export default reviewReducer