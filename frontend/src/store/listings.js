import csrfFetch from "./csrf"

export const RECEIVE_LISTINGS = 'listings/RECEIVE_LISTINGS'
export const RECEIVE_LISTING = 'listings/RECEIVE_LISTING'

const receiveListings = (listings) => {
    return {
        type: RECEIVE_LISTINGS,
        listings
    }
}

const receiveListing = (payload) => ({
    type: RECEIVE_LISTING,
    listing: payload
})





export const getListings = state => {
    return state.listings ? Object.values(state.listings) : []
}

export const getListing = (listingId) => state => {
    return state.listings?.[listingId] ? state.listings[listingId] : null
}





export const fetchListings = () => async (dispatch) => {
    const response = await csrfFetch('/api/listings')
    const data = await response.json()
    dispatch(receiveListings(data))
}

export const fetchListing = (listingId) => async (dispatch) => {
    const response = await csrfFetch(`/api/listings/${listingId}`)
    const data = await response.json()
// debugger
    dispatch(receiveListing(data.listing))
}
//tf is this being nested for




const listingsReducer = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_LISTINGS:
            return {...state, ...action.listings}
        case RECEIVE_LISTING:
            return {...state, [action.listing.id]: action.listing}
        default:
            return state
    }
}


export default listingsReducer