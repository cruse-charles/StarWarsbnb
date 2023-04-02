import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from '../src/store/components/LoginFormPage/index';
import SignupFormPage from '../src/store/components/SignupFormPage/index';
import Navigation from "../src/store/components/Navigation/index";

function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
    </>
  );
}

export default App;