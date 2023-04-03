import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./store/components/SignupFormPage";
import Navigation from "./store/components/Navigation";
import Listings from "./store/components/Listings"
import Carousel from "./store/components/Carousel";

function App() {
  return (
    <>
      <Navigation />
        <Carousel />
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      <Listings />
    </>
  );
}

export default App;