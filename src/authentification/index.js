import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './style.css';
import Login from "./containers/LoginContainer";
import {connectedRouterRedirect} from "redux-auth-wrapper/history4/redirect";
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper'


class LoginApp extends Component {
	render() {
		return (
			<div id="home">
				<Container>
					<h2 className="text-center">Home</h2>
					<Login/>
				</Container>
			</div>
		);
	}
}

const locationHelper = locationHelperBuilder({});

export const userIsAuthenticated = connectedRouterRedirect({
	redirectPath: "/login",
	authenticatedSelector: state => state.auth.isLoggedIn,
	wrapperDisplayName: "UserIsAuthenticated"
});

export const userIsNotAuthenticaed = connectedRouterRedirect({
    redirectPath: (state,ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/',
    allowRedirectBack: false,
    authenticatedSelector: state => !state.auth.isLoggedIn,
    wrapperDisplayName: "UserIsNotAuthenticated"
})

const RedirectedLogin = userIsNotAuthenticaed(LoginApp);

export default RedirectedLogin;
