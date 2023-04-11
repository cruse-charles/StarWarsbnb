import React from "react";
import { Route, Switch } from "react-router-dom";
import ListingsIndex from "./store/components/Listings";
// import Carousel from "./store/components/Carousel";
import ListingShowPage from "./store/components/ListingShow/ListingShowPage";
import ReviewForm from "./store/components/Reviews/ReviewForm";
import ProfilePage from "./store/components/Profile/ProfilePage";

function App() {
  

  return (
    <>
      <Switch>
        <Route exact path='/' component={ListingsIndex} />
        <Route exact path='/listings/:listingId' component={ListingShowPage} />
        <Route exact path='/listings/:listingId/reviews/new' component={ReviewForm} />
        <Route exact path='/listings/:listingId/reviews/:reviewId/edit'component={ReviewForm}/>
        <Route exact path ='/users/:userId' component={ProfilePage}/>
      </Switch>
    </>
  );
}

export default App;