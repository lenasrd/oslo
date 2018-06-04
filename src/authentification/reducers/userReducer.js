import RSA from'react-simple-auth';
import {login, logout} from "../actions/authenticateUser";
import {handleActions} from "redux-actions";
import linseProvider from "../providers/linse";

const unauthenticatedState = {
    username: "anonymous",
    email: "anonymous@franz.com"
};

const initialState = {...unauthenticatedState};

const userReducer =  handleActions(
    {
        [login]: (state, { payload: { email, name} }) => {
            return { ...state, email : email, username: name };
        },
        [logout]: (state, action) => {
            return { ...unauthenticatedState};
        },
    },
    initialState
);

export default userReducer