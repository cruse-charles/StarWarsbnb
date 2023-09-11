import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom/cjs/react-router-dom.min";
import { fetchListing, getListing } from "../../listings";
import { useEffect } from "react";
import Navigation from "../Navigation";
import "./ListingShowPage.css";
import testPhoto from "../../../../src/assets/l2p1.png";
import ListingReviews from "../Reviews";
import ListsingReservationForm from "../Reservations/ListingReservationForm";

const ListingShowPage = () => {
  const dispatch = useDispatch();
  const { listingId } = useParams();

  //This should match with the url wildcard in the APP route, to always receive the correct one
  const listing = useSelector(getListing(listingId));
  let user = useSelector((state) => state.session?.user);

  useEffect(() => {
    dispatch(fetchListing(listingId));
  }, [listingId, dispatch]);

  //Should not display if there is no listing in state
  if (!listing) {
    return null;
  }

  return (
    <>
      <div id="listings-page">
        {/* Navigation bar including links and search bar and sign-in */}
        <Navigation />

        {/* Titles for listing page */}
        <div id="title-container">
          <h1 id="title">{listing.title}</h1>
          <br></br>
          <div id="location">
            {listing.city}, {listing.country}
          </div>
        </div>

        {/* Photos of listing, commented out portions are kept for testing for website adjustment to not exceed AWS limit */}
        <div id="images-wrapper">
          <div id="images-container">
            <img
              className="main-img"
              src={listing?.photoUrls?.[0]}
              alt="listing"
            />
            <img
              className="small-img"
              src={listing?.photoUrls?.[1]}
              alt="listing"
            />
            <img
              className="small-img"
              src={listing?.photoUrls?.[2]}
              alt="listing"
            />
            <img
              id="top-right-pic"
              className="small-img"
              src={listing?.photoUrls?.[3]}
              alt="listing"
            />
            <img
              id="bottom-right-pic"
              className="small-img"
              src={listing?.photoUrls?.[4]}
              alt="listing"
            />
            {/* <img className='main-img'src={testPhoto} alt='listing'/>
                    <img className='small-img' src={testPhoto} alt='listing'/>
                    <img className='small-img' src={testPhoto} alt='listing'/>
                    <img id='top-right-pic' className='small-img' src={testPhoto} alt='listing'/>
                    <img id='bottom-right-pic'className='small-img' src={testPhoto} alt='listing'/> */}
          </div>
        </div>

        {/* 'Highlights' for listing */}
        <div id="bottom-portion">
          <div id="information-wrapper">
            <div id="information-container">
              <div id="hosted-by-container">
                <h1>Entire home hosted by {listing.host}</h1>
                <h2>4 guests 2 bedrooms 3 beds 1.5 baths</h2>
              </div>
              <div id="highlights-wrapper">
                <div className="highlight-container" id="highlight3">
                  <div className="highlight-icon-container">
                    <i className="fa-solid fa-medal fa-xl"></i>
                  </div>
                  <div className="highlight-text-container">
                    <h2>This host is a SuperHost</h2>
                    <div>
                      Superhosts are experienced, highly rated hosts who are
                      committed to providing great stays for guests.
                    </div>
                  </div>
                </div>
                <div className="highlight-container" id="highlight3">
                  <div className="highlight-icon-container">
                    <i className="fa-solid fa-location-dot fa-xl"></i>
                  </div>
                  <div className="highlight-text-container">
                    <h2>Great location</h2>
                    <div>
                      95% of recent guests gave the location a 5-star rating.
                    </div>
                  </div>
                </div>
                <div className="highlight-container" id="highlight3">
                  <div className="highlight-icon-container">
                    <i className="fa-solid fa-calendar fa-xl"></i>
                  </div>
                  <div className="highlight-text-container">
                    <h2>Free cancellation within 48 hours.</h2>
                    <div></div>
                  </div>
                </div>
              </div>

              {/* Listing's description pulled from database and properly formatted */}
              <div id="description-container">
                {/* <h2>{listing.description}</h2> */}
                <div id="lsp_listing_description">
                  {listing.description.split("\n").map((line, index) => (
                    <h2 key={index}>
                      {line}
                      <br></br>
                    </h2>
                  ))}
                </div>
              </div>

              {/* Icons for what is offered at listing */}
              <div id="icons-container">
                <h2>What this place offers</h2>
                <div id="icons-list">
                  <div className="offered-icons">
                    <i className="fa-solid fa-kitchen-set fa-lg"></i>
                    <p>Kitchen</p>
                  </div>
                  <div className="offered-icons">
                    <i className="fa-solid fa-wifi fa-lg"></i>Wifi
                  </div>
                  <div className="offered-icons">
                    <i className="fa-solid fa-bath fa-xl"></i>Bathtub
                  </div>
                  <div className="offered-icons">
                    <i className="fa-solid fa-hot-tub-person fa-lg"></i>Hottub
                  </div>
                  <div className="offered-icons">
                    <i className="fa-solid fa-water-ladder fa-lg"></i>Pool
                  </div>
                  <div className="offered-icons">
                    <i className="fa-solid fa-tv fa-lg"></i>TV
                  </div>
                  <div className="offered-icons">
                    <i className="fa-solid fa-paw fa-xl"></i>Pets Allowed
                  </div>
                  <div className="offered-icons">
                    <i className="fa-solid fa-car fa-lg"></i>Parking
                  </div>
                  <div className="offered-icons">
                    <i className="fa-solid fa-snowflake fa-lg"></i>Air
                    Conditioning
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar to create reservations for this listing */}
            <ListsingReservationForm />
          </div>

          {/* Writing and Viewing Reviews */}
          <div id="reviews-wrapper">
            <div id="review-stats">
              {/* if signed in, can write a rewview */}
              {user && (
                <Link
                  id="write-review"
                  to={`/listings/${listingId}/reviews/new`}
                >
                  Click here to write a review!
                </Link>
              )}

              {/* Listing's reviews */}
              <h2>Reviews for this airbnb</h2>
              <ListingReviews />
            </div>
            <div id="reviews-container"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingShowPage;
