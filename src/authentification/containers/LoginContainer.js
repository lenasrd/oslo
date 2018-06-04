import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Login from '../components/Login';
import { login, logout } from 'redux-implicit-oauth2'

const config = {
    url: "http://127.0.0.1:8000/o/authorize",
    client: "eFhUKYi4yCwiocI6weXLiJBJikRbDCUr3RYpUXOH",
    redirect: "http://localhost:3000/callback.html",
    scope: "write",
    width: 400, // Width (in pixels) of login popup window. Optional, default: 400
    height: 400 // Height (in pixels) of login popup window. Optional, default: 400
};

const mapStateToProps = state => {
	return {
		isLoggedIn: state.auth.isLoggedIn,
        profile: state.user
	};
};

const mapDispatchToProps = {
	login: () => login(config),
	logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
