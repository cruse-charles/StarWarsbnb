export const RECEIVE_LISTINGS = 'listings/RECEIVE_LISTINGS'

const receiveListings = (listings) => {
    return {
        type: RECEIVE_LISTINGS,
        listings
    }
}

export const getListings = state => {
    return state.listings ? Object.values(state.listings) : []
}

export const fetchListings = () => async (dispatch) => {
    const response = await fetch('/api/listings')
    const data = await response.json()
    dispatch(receiveListings(data))
}



const listingsReducer = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_LISTINGS:
            return {...state, ...action.listings}
        default:
            return state
    }
}


export default listingsReducer