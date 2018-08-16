import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';

import { siteConfig } from './settings'

import Raven from "raven-js"
import createRavenMiddleware from "raven-for-redux";
Raven.config(siteConfig.sentryDSN).install();
const ravenMiddleware = createRavenMiddleware(Raven, {
  // Optionally pass some options here.
})

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, sagaMiddleware, routeMiddleware, ravenMiddleware];

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  compose(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);
export { store, history };
