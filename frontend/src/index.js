import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./context/Modal";
import "./index.css";
import App from "./App";
import configureStore from "./store";
import csrfFetch from "./store/csrf";
import * as sessionActions from "./store/session";
import { restoreCSRF } from "./store/csrf";
import { Wrapper } from '@googlemaps/react-wrapper';


const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.sessionActions = sessionActions;
}

const renderApplication = () => {
  ReactDOM.render(
    <React.StrictMode>
       {/* <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY}> */}
        <Root />
      {/* </Wrapper> */}

    </React.StrictMode>,
    document.getElementById('root')
  );
}

if (
  sessionStorage.getItem("currentUser") === null ||
  sessionStorage.getItem("X-CSRF-Token") === null 
) {
  restoreCSRF();
  renderApplication();
} else {
  store.dispatch(sessionActions.restoreSession()).then(renderApplication);
}

function Root() {
  return (
    <ModalProvider>
      <Provider store={store}>
        <BrowserRouter>

        <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY}>
          <App />
        </Wrapper>

        </BrowserRouter>
      </Provider>
    </ModalProvider>
  );
}
