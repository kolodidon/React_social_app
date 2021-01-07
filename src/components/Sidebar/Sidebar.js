import React from 'react';
import s from './Sidebar.module.scss'
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import {connect} from "react-redux";

const Sidebar = (props) => {
    return (
        <aside className={s.nav}>
            <nav>
                <NavLink activeClassName = {s.active} exact to="/">Profile</NavLink>
                <NavLink activeClassName = {s.active} to="/dialogs">Dialogs</NavLink>
                <NavLink activeClassName = {s.active} to="/users">Users</NavLink>
                <NavLink activeClassName = {s.active} to="/news">News</NavLink>
                <NavLink activeClassName = {s.active} to="/music">Music</NavLink>
                <NavLink activeClassName = {s.active} to="/settings">Settings</NavLink>
            </nav>
            <Friends friends={props.friends}/>
        </aside>
    )
}

const mapStateToProps = (state) => {
    return({
        friends: state.sidebar.friends
    })
}

const actionCreators = null

export default connect(mapStateToProps, actionCreators)(Sidebar);