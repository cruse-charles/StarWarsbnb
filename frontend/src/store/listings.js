const SET_LISTINGS = 'listings/setListings'

const setListings = (listings) => {
    return {
        type: SET_LISTINGS,
        listings
    }
}

const fetchListings = () => async (dispatch) => {
    const response = await fetch('/api/listings')
}