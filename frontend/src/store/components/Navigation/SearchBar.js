import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { useEffect, useState } from "react"
import { fetchSearchResults } from "../../search"

const SearchBar = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const [searchText, setSearchText] = useState("")
//added for stuff
    const [query, setQuery] = useState("")

    useEffect(() => {

    }, [])
//made this just now for stopping auto dropdown for search

    //made to be async in case user is typing quickly and just happens to mess something up
    async function handleSearch(e) {
        e.preventDefault()
        const query = e.target.value;
        // query = e.target.value;
        await setSearchText(query)
        setQuery(query)
        // dispatch(fetchSearchResults(query))
    }

    function handleSearchSubmit(e) {
        e.preventDefault()
        // if (searchText.length > 0) {
        if (query.length > 0) {
            history.push(`/search?listings=${query}`)
            dispatch(fetchSearchResults(query))
        }
    }

    return (
        <>
            <input id='searchbar' type='text' onChange={handleSearch} placeholder='Anywhere | Anyweek | Add Guests'></input>
            {/* this onChange lets us do a search for everything we type for the dropdown */}

            {/* <input id='searchbar' type='text' placeholder='Anywhere | Anyweek | Add Guests'></input> */}
            <button id='search-button' onClick={handleSearchSubmit}><i className="fa-solid fa-magnifying-glass fa-lg"></i></button>
        </>
    )

}


export default SearchBar