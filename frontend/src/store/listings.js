import csrfFetch from "./csrf";

//Action types to receive listing or listings
export const RECEIVE_LISTINGS = 'listings/RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'listings/RECEIVE_LISTING';

//Action Creator, returns action object for listings
const receiveListings = (listings) => {
    return {
        type: RECEIVE_LISTINGS,
        listings
    }
};

//Action Creator, returns action object for a listing
const receiveListing = (payload) => ({
    type: RECEIVE_LISTING,
    listing: payload
});




//Selector from state to return array of listings
export const getListings = state => {
    return state.listings ? Object.values(state.listings) : [];
};

//Selector from state to return a single listing in an array
export const getListing = (listingId) => state => {
    return state.listings?.[listingId] ? state.listings[listingId] : null;
};




//Thunk action creator to fetch listings from API and add to our state/store
export const fetchListings = () => async (dispatch) => {
    const response = await csrfFetch('/api/listings');

    if(response.ok) {
        const data = await response.json();
        dispatch(receiveListings(data));
    }
};

////Thunk action creator to fetch a listing from API and add to our state/store
export const fetchListing = (listingId) => async (dispatch) => {
    const response = await csrfFetch(`/api/listings/${listingId}`);
    const data = await response.json();
    dispatch(receiveListing(data.listing));
};




//Automatically called by Redux whenever an action is dispatched for obtaining listings or listing
const listingsReducer = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_LISTINGS:
            return {...state, ...action.listings};
        case RECEIVE_LISTING:
            return {...state, [action.listing.id]: action.listing};
        default:
            return state;
    }
}


export default listingsReducer