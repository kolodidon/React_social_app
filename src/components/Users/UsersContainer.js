import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, serUsersAC, unfollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (usedId) => {
            dispatch(followAC(usedId))
        },
        unfollow: (usedId) => {
            dispatch(unfollowAC(usedId))
        },
        setUsers: (users) => {
            dispatch(serUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);