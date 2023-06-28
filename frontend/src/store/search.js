//Action types to receive search results
export const GET_SEARCH_RESULTS = 'search/searchResults';

//Action Creator, returns action object for search
export const receiveSearchResults = searchResults => ({
    type: GET_SEARCH_RESULTS,
    searchResults
});

//Thunk action creator to fetch listings from API and add to our state/store
export const fetchSearchResults = (query) => async dispatch => {
    const res = await fetch(`/api/listings/search?query=${query}`);
    const data = await res.json();
    dispatch(receiveSearchResults(data));
};

//Automatically called by Redux whenever an action is dispatched for obtaining listings or listing
const searchReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_SEARCH_RESULTS:
            if(action.searchResults.search){
                return action.searchResults.search;
            } else{
                return {};
            }
        default:
            return state;
    }
};

export default searchReducer;