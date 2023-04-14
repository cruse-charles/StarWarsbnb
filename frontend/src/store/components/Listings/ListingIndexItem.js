import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import testPhoto from '../../../../src/assets/l2p1.png'


const ListingIndexItem = ({listing}) => {
    const history = useHistory()

    const routeChange = () => {
        let path = `/listings/${listing.id}`
        history.push(path)
    }

    return(
        <div id='listing-card' onClick={routeChange}>
            {/* <img id='listing-profile-photo'src={testPhoto} alt='listing'/> */}
            <img id='listing-profile-photo'src={listing?.photoUrls?.[0]} alt='listing'/>
            <div id='listing-city-country'>{listing.city}, {listing.country}</div>
            <div>Hosted by a superhost!</div>
            <div>Apr 15- Apr 18</div>
            <div id='listing-price-line'><span id='listing-price'>${listing.price}</span> night</div>
        </div>
    )
}

export default ListingIndexItem