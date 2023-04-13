import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { useEffect, useState } from "react"
import { fetchSearchResults } from "../../search"

const SearchBar = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const [searchText, setSearchText] = useState("")

    useEffect(() => {

    }, [])

    //made to be async in case user is typing quickly and just happens to mess something up
    async function handleSearch(e) {
        e.preventDefault()
        const query = e.target.value;
        await setSearchText(query)
        dispatch(fetchSearchResults(query))
    }

    function handleSearchSubmit(e) {
        e.preventDefault()
        if (searchText.length > 0) {
            history.push(`/search?listings=${searchText}`)
        }
    }

    return (
        <>
            <input type='text' onChange={handleSearch} placeholder='Search...'></input>
            {/* this onChange lets us do a search for everything we type for the dropdown */}
            <button onClick={handleSearchSubmit}>search</button>
        </>
    )

}


export default SearchBar