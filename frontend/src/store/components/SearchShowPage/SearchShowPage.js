import { useSelector } from 'react-redux';
// import { fetchSearchResults } from '../../store/search';
import { fetchSearchResults } from '../../search';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navigation from '../Navigation';
import ListingIndexItem from '../Listings';
import './SearchShowPage.css'

const Search = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    // debugger;
    
    useEffect(() => {
        const query = history.location.search.split('=')[1];
        dispatch(fetchSearchResults(query))
    }, []);
    
    const searchResults = useSelector((state) => state.searchResults );
    

    const routeChange = () => {
        let path = `/listings/${searchResults.id}`
        history.push(path)
    }


    return(
        <>
        <Navigation />
        <div id='listings-grid'>
            {Object.values(searchResults).map((ele) => {
                return (
                    <div id='listing-card' onClick={routeChange}>
                        <img id='listing-profile-photo'src={ele?.photoUrls?.[0]} alt='listing'/>
                        <div id='listing-city-country'>{ele.city}, {ele.country}</div>
                        <div>Hosted by a superhost!</div>
                        <div>Apr 15- Apr 18</div>
                        <div id='listing-price-line'><span id='listing-price'>${ele.price}</span> night</div>
                    </div>
                )
            })}            
        </div>





        {/* {Object.values(searchResults).map((ele) => {
            return <div>{ele.title}</div>
        })} */}
        </>
    );
}

export default Search;