import { useSelector } from 'react-redux';
import { fetchSearchResults } from '../../search';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navigation from '../Navigation';
import ListingIndexItem from '../Listings';
import './SearchShowPage.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import testPhoto from '../../../../src/assets/l2p1.png';

const Search = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    
    // dispatch query when a new search is done
    useEffect(() => {
        const query = history.location.search.split('=')[1];
        dispatch(fetchSearchResults(query));
    }, []);
    
    const searchResults = useSelector((state) => state.searchResults );


    return(
        <>
        <Navigation />
        <div id='listings-grid'>
            {/* Map search results */}
            {Object.values(searchResults).map((ele) => {
                return (
                    <a href={`/listings/${ele.id}`}>
                        <div id='listing-card'>
                            {/* Test photo kept for when adjustments are made to site to ensure no overage on AWS */}
                            <img id='listing-profile-photo'src={ele?.photoUrls?.[0]} alt='listing'/>
                            {/* <img id='listing-profile-photo'src={testPhoto} alt='listing'/> */}

                            <div id='listing-city-country'>{ele.city}, {ele.country}</div>
                            <div>Hosted by a superhost!</div>
                            <div>Apr 15- Apr 18</div>
                            <div id='listing-price-line'><span id='listing-price'>${ele.price}</span> night</div>
                        </div>
                    </a>
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