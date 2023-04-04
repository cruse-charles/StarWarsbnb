// import { useDispatch } from "react-redux"


const ListingIndexItem = ({listing}) => {
    // const dispatch = useDispatch()

    return(
        <div id='listing-card'>
            <div>{listing.title}</div>
            <div>{listing.description}</div>
            <div>{listing.address}</div>
            <div>{listing.city}</div>
            <div>{listing.country}</div>
        </div>
    )
}

export default ListingIndexItem