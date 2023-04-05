// import { useDispatch } from "react-redux"
import testPhoto from '../../../../src/assets/tatooinehome.png'

const ListingIndexItem = ({listing}) => {
    // const dispatch = useDispatch()

    return(
        <div id='listing-card'>
            <img id='listing-profile-photo'src={testPhoto}/>
            {/* <div id='listing-title'>{listing.title}</div> */}
            {/* <div id='listing-description'>{listing.description}</div> */}
            {/* <div id='listing-address'>{listing.address}</div> */}
            <div id='listing-city-country'>{listing.city}, {listing.country}</div>
            {/* <div id='listing-country'>{listing.country}</div> */}
            <div id='listing-price-line'><span id='listing-price'>${listing.price}</span> night</div>
        </div>
    )
}

export default ListingIndexItem