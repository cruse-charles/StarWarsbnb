import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session';
import listings from './listings'
import reviews from './reviews'
import reservations from './reservations'
import searchReducer from './search'

const rootReducer = combineReducers({
  session,
  listings,
  reviews,
  reservations,
  searchResults: searchReducer
  // this is what names the keys in our state
});
  
let enhancer;
  
if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
  } else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}
  
const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};
  
export default configureStore;