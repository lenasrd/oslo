import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { authReducer } from 'redux-implicit-oauth2'

// import your Module reducers here and combine them
import home from './home/reducers'
import userReducer from "./authentification/reducers/userReducer";

const rootReducer = combineReducers({
	home,
	auth: authReducer,
	router: routerReducer
});

export default rootReducer;