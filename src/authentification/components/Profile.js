import React from 'react';
import {connect} from "react-redux";
import {fetchProfile} from "../actions/authenticateUser";

const Profile = ({ username, email, logout }) => {
    <h3>{username}</h3>
}

const mapStateToProps = ({user}) => {
    return {
        username: user.username,
        email: user.email

    }
};

const mapDispatchToProps = {
    fetchprofile: () => fetchProfile()
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
