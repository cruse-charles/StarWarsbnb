import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import { fetchSearchResults } from "../../search";

const SearchBar = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [searchText, setSearchText] = useState("");
    const [query, setQuery] = useState("");

    //Made to stop auto dropdown for search
    useEffect(() => {

    }, []);
    

    //made to be async in case user is typing quickly
    async function handleSearch(e) {
        e.preventDefault();
        const query = e.target.value;
        await setSearchText(query);
        setQuery(query);
        // dispatch(fetchSearchResults(query));
    }

    function handleSearchSubmit(e) {
        e.preventDefault();
        // For autosearch: if (searchText.length > 0) {
        if (query.length > 0) {
            history.push(`/search?listings=${query}`);
            dispatch(fetchSearchResults(query));
        }
    }

    return (
        <>
            <input id='searchbar' type='text' onChange={handleSearch} placeholder='Anywhere | Anyweek | Add Guests'></input>
            {/* This onChange allows for a search of everything typed for dropdown */}

            <button id='search-button' onClick={handleSearchSubmit}><i className="fa-solid fa-magnifying-glass fa-lg"></i></button>
        </>
    )

}


export default SearchBar