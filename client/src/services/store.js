import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const REDUX_DEV_TOOLS =
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();

const middlewares = applyMiddleware(thunk);

const composeEnchancers = compose(
  middlewares,
  REDUX_DEV_TOOLS,
);

export default createStore(rootReducer, composeEnchancers);