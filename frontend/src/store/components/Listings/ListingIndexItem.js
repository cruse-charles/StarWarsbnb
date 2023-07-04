import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import React, { useState, useEffect }  from 'react';
import testPhoto from '../../../../src/assets/l2p1.png';


const ListingIndexItem = ({listing, routeChange}) => {
    const history = useHistory();
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [showRightArrow, setShowRightArrow] = useState(true)
    const [activePhotoIndex, setActivePhotoIndex] = useState(0)

    //NEW
    const [slideDirection, setSlideDirection] = useState('');
    //NEW

    const handleClick = () => {
        if (routeChange) {
            routeChange(listing)
        }
    }

    //Rendering buttons based on current position of photos array
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

    //OLD
    //Show button and cycle through photos
    // const handleLeftArrow = () => {
    //     if (activePhotoIndex > 0) {
    //         setActivePhotoIndex(activePhotoIndex - 1)
    //     }
    // }

    // //Show button and cycle through photos
    // const handleRightArrow = () => {
    //     if (activePhotoIndex < listing.photoUrls.length - 1) {
    //         setActivePhotoIndex(activePhotoIndex + 1)
    //     }
    // }
    // OLD


    //NEW
    const handleLeftArrow = () => {
        if (activePhotoIndex > 0) {
          setSlideDirection('slide-out-right');
          setTimeout(() => {
            setActivePhotoIndex(activePhotoIndex - 1);
            setSlideDirection('slide-in-left');
          }, 100); // Adjust the transition duration as needed
        }
      };
      
      const handleRightArrow = () => {
        if (activePhotoIndex < listing.photoUrls.length - 1) {
          setSlideDirection('slide-out-left');
          setTimeout(() => {
            setActivePhotoIndex(activePhotoIndex + 1);
            setSlideDirection('slide-in-right');
          }, 100); // Adjust the transition duration as needed
        }
      };

    //NEW


    return(
        <div id='listing-card'>
            {/* Test photo to be kept in for site adjustments and not overusing data */}
            {/* <img id='listing-profile-photo'src={testPhoto} alt='listing' onClick={handleClick}/> */}
            {/* <img id='listing-profile-photo'src={listing?.photoUrls?.[activePhotoIndex]} alt='listing' onClick={handleClick}/> */}

            {/* NEW */}

            {/* <div id='photo-container'> */}
                <img
                // key={activePhotoIndex}
                id='listing-profile-photo'
                className={`listing-photo ${slideDirection}`}
                src={listing?.photoUrls?.[activePhotoIndex]}
                alt="listing"
                onClick={handleClick}
            />
            {/* </div> */}
            {/* NEW */}

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
            
            <div id='listing-card-info-container' onClick={handleClick}>
                <div id='listing-city-country'>{listing.city}, {listing.country}</div>
                <div>Hosted by a superhost!</div>
                <div>Jul 15 - Jul 18</div>
                <div id='listing-price-line'><span id='listing-price'>${listing.price}</span> night</div>

            </div>
        </div>
    )
}

export default ListingIndexItem



