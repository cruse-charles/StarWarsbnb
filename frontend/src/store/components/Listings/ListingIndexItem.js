// import { useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import testPhoto from '../../../../src/assets/l2p1.png'


const ListingIndexItem = ({listing}) => {
    const history = useHistory()

    const routeChange = () => {
        let path = `/listings/${listing.id}`
        history.push(path)
    }

    return(
        // <Link to={`listings/${listing.id}`}>
            <div id='listing-card' onClick={routeChange}>
                <img id='listing-profile-photo'src={testPhoto} alt='listing'/>
                {/* <div id='listing-title'>{listing.title}</div> */}
                {/* <div id='listing-description'>{listing.description}</div> */}
                {/* <div id='listing-address'>{listing.address}</div> */}
                <div id='listing-city-country'>{listing.city}, {listing.country}</div>
                {/* <div id='listing-country'>{listing.country}</div> */}
                <div id='listing-price-line'><span id='listing-price'>${listing.price}</span> night</div>
            </div>
        // </Link>
    )
}

export default ListingIndexItem