import React from "react";
import { Route, Switch } from "react-router-dom";
import ListingsIndex from "./store/components/Listings";
// import Carousel from "./store/components/Carousel";
import ListingShowPage from "./store/components/ListingShow/ListingShowPage";
import ReviewForm from "./store/components/Reviews/ReviewForm";
import ProfilePage from "./store/components/Profile/ProfilePage";
import ListsingReservationForm from "./store/components/Reservations/ListingReservationForm";
import Search from "./store/components/SearchShowPage/SearchShowPage";

function App() {
  

  return (
    <>
      <Switch>
        <Route exact path='/' component={ListingsIndex} />
        <Route exact path='/listings/:listingId' component={ListingShowPage} />
        <Route exact path='/listings/:listingId/reviews/new' component={ReviewForm} />
        <Route exact path='/listings/:listingId/reviews/:reviewId/edit'component={ReviewForm}/>
        <Route exact path ='/users/:userId' component={ProfilePage}/>
        <Route exact path ='/reservations/:reservationId/edit' component={ListsingReservationForm}/>
        <Route path='/search'><Search /></Route>
      </Switch>
    </>
  );
}

export default App;