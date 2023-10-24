import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import React, { useState, useEffect } from "react";
import testPhoto from "../../../../src/assets/l2p1.png";
import { Card } from "react-bootstrap";

const ListingIndexItem = ({ listing, routeChange, context }) => {
  const history = useHistory();
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("");

  const handleClick = () => {
    if (routeChange) {
      routeChange(listing);
    }
  };

  //Rendering buttons based on current position of photos array
  useEffect(() => {
    if (activePhotoIndex > 0) {
      setShowLeftArrow(true);
    } else {
      setShowLeftArrow(false);
    }

    if (activePhotoIndex == listing.photoUrls.length - 1) {
      setShowRightArrow(false);
    } else {
      setShowRightArrow(true);
    }
  }, [activePhotoIndex]);

  const handleLeftArrow = () => {
    if (activePhotoIndex > 0) {
      setSlideDirection("slide-out-right");
      setTimeout(() => {
        setActivePhotoIndex(activePhotoIndex - 1);
        setSlideDirection("slide-in-left");
      }, 100); // Adjust the transition duration as needed
    }
  };

  const handleRightArrow = () => {
    if (activePhotoIndex < listing.photoUrls.length - 1) {
      setSlideDirection("slide-out-left");
      setTimeout(() => {
        setActivePhotoIndex(activePhotoIndex + 1);
        setSlideDirection("slide-in-right");
      }, 100); // Adjust the transition duration as needed
    }
  };

  return (
    //  THIS REQUIRES THAT I MAKE THE IMAGE A COMPONENT WITH A CAROSEL SINCE I MADE THE IMAGES CUSTOM BASICALLY
    // <Card>
    //     <Card.Img variant="top" src={listing?.photoUrls?.[activePhotoIndex]} />
    //     <Card.Body>
    //         <Card.Text>

    //         </Card.Text>
    //     </Card.Body>
    // </Card>

    <div id="listing-card" className={context}>
      {/* Test photo to be kept in for site adjustments and not overusing data */}
      {/* <img id='listing-profile-photo'src={testPhoto} alt='listing' onClick={handleClick}/> */}

      <img
        // key={activePhotoIndex}
        id={`${context}-listing-profile-photo`}
        className={`listing-photo ${slideDirection}`}
        src={listing?.photoUrls?.[activePhotoIndex]}
        alt="listing"
        onClick={handleClick}
      />

      <div id={`${context}-picture-arrows-container`}>
        {showLeftArrow && (
          <button
            id="left-arrow"
            className="picture-arrows"
            onClick={handleLeftArrow}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
        )}

        {showRightArrow && (
          <button
            id="right-arrow"
            className="picture-arrows"
            onClick={handleRightArrow}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        )}
      </div>

      <div id={`${context}-listing-card-info-container`} onClick={handleClick}>
        <div id={`${context}-listing-city-country`}>
          {listing.city}, {listing.country}
        </div>
        <div id={`${context}-hosted-by-line`}>Hosted by a superhost!</div>
        <div id={`${context}-date-line`}>Aug 15 - Aug 18</div>
        <div id={`${context}-listing-price-line`}>
          <span id="listing-price">${listing.price}</span> night
        </div>
      </div>
    </div>
  );
};

export default ListingIndexItem;
