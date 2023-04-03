import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./store/components/SignupFormPage";
import Navigation from "./store/components/Navigation";

function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
    </>
  );
}

export default App;