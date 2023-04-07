import React from "react";
import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./store/components/SignupFormModal/SignupForm";
import Navigation from "./store/components/Navigation";
import ListingsIndex from "./store/components/Listings";
import Carousel from "./store/components/Carousel";
import ListingShowPage from "./store/components/ListingShow/ListingShowPage";
import ReviewForm from "./store/components/Reviews/ReviewForm";

function App() {
  

  return (
    <>
        <Switch>
          <Route exact path='/' component={ListingsIndex} />
          <Route exact path='/listings/:listingId' component={ListingShowPage} />
          {/* <Route path='/'>
            <ListingsIndex />
          </Route> */}
          <Route exact path='/listings/:listingId/reviews/new' component={ReviewForm} />
        </Switch>
    </>
  );
}

export default App;