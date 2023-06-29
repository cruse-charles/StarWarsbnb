import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import React, { useState, useEffect }  from 'react';
import testPhoto from '../../../../src/assets/l2p1.png';


// const ListingIndexItem = ({listing}) => {
const ListingIndexItem = ({listing, routeChange}) => {
    const history = useHistory();
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [showRightArrow, setShowRightArrow] = useState(true)
    const [activePhotoIndex, setActivePhotoIndex] = useState(0)

    const handleClick = () => {
        if (routeChange) {
            routeChange(listing)
        }
    }

    useEffect(() => {
        if(activePhotoIndex > 0) {
            setShowLeftArrow(true)
        } else {
            setShowLeftArrow(false)
        }

        if (activePhotoIndex == listing.photoUrls.length - 1) {
            setShowRightArrow(false)
        } else {
            setShowRightArrow(true)
        }
    }, [activePhotoIndex])

    const handleLeftArrow = () => {
        if (activePhotoIndex > 0) {
            setActivePhotoIndex(activePhotoIndex - 1)
            // setShowLeftArrow(true)
            // setShowRightArrow(true)
        }

        // if (activePhotoIndex === 0) {
        //     setShowLeftArrow(false)
        // }
    }

    const handleRightArrow = () => {
        if (activePhotoIndex < listing.photoUrls.length - 1) {
            setActivePhotoIndex(activePhotoIndex + 1)
            // setShowRightArrow(true)
            // setShowLeftArrow(true)
        }

        // if (activePhotoIndex === listing.photoUrls.length - 1) {
        //     setShowRightArrow(false)
        // }
    }

    //Redirecting to listing's page
    // const routeChange = () => {
    //     let path = `/listings/${listing.id}`;
    //     history.push(path);
    // }



    //OLD
    // return(
    //     // <div id='listing-card' onClick={routeChange}>
    //     <div id='listing-card' onClick={handleClick}>
    //         {/* Test photo to be kept in for site adjustments and not overusing data */}
    //         <img id='listing-profile-photo'src={testPhoto} alt='listing'/>
    //         {/* <img id='listing-profile-photo'src={listing?.photoUrls?.[0]} alt='listing'/> */}
            
    //         <div id='listing-city-country'>{listing.city}, {listing.country}</div>
    //         <div>Hosted by a superhost!</div>
    //         <div>Jul 15 - Jul 18</div>
    //         <div id='listing-price-line'><span id='listing-price'>${listing.price}</span> night</div>
    //     </div>
    // )
    //OLD


    //NEW
    return(
        // <div id='listing-card' onClick={routeChange}>
        <div id='listing-card'>
            {/* Test photo to be kept in for site adjustments and not overusing data */}
            {/* <img id='listing-profile-photo'src={testPhoto} alt='listing' onClick={handleClick}/> */}
            {/* <img id='listing-profile-photo'src={listing?.photoUrls?.[0]} alt='listing' onClick={handleClick}/> */}
            <img id='listing-profile-photo'src={listing?.photoUrls?.[activePhotoIndex]} alt='listing' onClick={handleClick}/>

            <div id='picture-arrows-container'>
                {showLeftArrow && (
                    <button id='left-arrow' className='picture-arrows' onClick={handleLeftArrow}>
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                )}

                {showRightArrow && (
                    <button id='right-arrow' className='picture-arrows' onClick={handleRightArrow}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                )}

            </div>
            
            <div id='listing-city-country'>{listing.city}, {listing.country}</div>
            <div>Hosted by a superhost!</div>
            <div>Jul 15 - Jul 18</div>
            <div id='listing-price-line'><span id='listing-price'>${listing.price}</span> night</div>
        </div>
    )
    //NEW
}

export default ListingIndexItem