import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import createHistory from 'history/createHashHistory';
import { routerMiddleware } from 'react-router-redux';

// import root epics/reducer
import rootEpic from './rootEpic';
import rootReducer from './rootReducer';
import queryString from 'query-string';
import {authMiddleware} from "redux-implicit-oauth2";
import {composeWithDevTools} from "redux-devtools-extension";

// export `history` to use in index.js, we using `createBrowserHistory`
export const history = createHistory();

const epicMiddleware = createEpicMiddleware(rootEpic, {
	dependencies: {
		queryString
	}
});

// Build the middleware for intercepting and dispatching navigation actions
const appRouterMiddleware = routerMiddleware(history);

const store = createStore(
	rootReducer,
    composeWithDevTools(
	applyMiddleware(epicMiddleware),
	applyMiddleware(appRouterMiddleware),
	applyMiddleware(authMiddleware))
);


export const token = () => {return store.getState().auth.token};

export default store;
