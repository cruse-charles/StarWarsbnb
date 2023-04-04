import csrfFetch from "./csrf"

export const RECEIVE_LISTINGS = 'listings/RECEIVE_LISTINGS'

const receiveListings = (listings) => {
    return {
        type: RECEIVE_LISTINGS,
        listings
    }
}

export const getListings = state => {
// debugger
    return state.listings ? Object.values(state.listings) : []
// debugger
}

export const fetchListings = () => async (dispatch) => {
// debugger
    const response = await csrfFetch('/api/listings')
    const data = await response.json()
    dispatch(receiveListings(data))
// debugger
}



const listingsReducer = (state = {}, action) => {
// debugger
    switch(action.type) {
        case RECEIVE_LISTINGS:
            return {...state, ...action.listings}
        default:
            return state
    }
}


export default listingsReducer