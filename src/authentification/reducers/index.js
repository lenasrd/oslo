import { combineReducers } from 'redux';
import userReducer from "./userReducer";

// import your Home Module reducers here and combine them
// Placed in same directory


const authentification = combineReducers({
	userReducer
});

export default authentification;