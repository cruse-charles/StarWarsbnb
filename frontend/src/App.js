import React from "react";
import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./store/components/SignupFormModal/SignupForm";
import Navigation from "./store/components/Navigation";
import ListingsIndex from "./store/components/Listings";
import Carousel from "./store/components/Carousel";
import ListingShowPage from "./store/components/ListingShow/ListingShowPage";

function App() {
  

  return (
    <>
        <Switch>
          <Route exact path='/' component={ListingsIndex} />
          <Route exact path='/listings/:listingId' component={ListingShowPage} />
          {/* <Route path='/'>
            <ListingsIndex />
          </Route> */}
        </Switch>
    </>
  );
}

export default App;