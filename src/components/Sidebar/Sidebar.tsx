import React from 'react';
import s from './Sidebar.module.scss'
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import {connect} from "react-redux";
import { globalStateType } from '../../redux/redux-store';
import { friendType } from '../../redux/sidebar-reducer';

type mapStateToPropsType = { friends: Array<friendType> }
type mapDispatchToPropsType = {}
type ownPropsType = {}
type PropsType = mapStateToPropsType & mapDispatchToPropsType & ownPropsType

const Sidebar: React.FC<PropsType> = (props) => {
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

const mapStateToProps = (state: globalStateType) => {
    return({
        friends: state.sidebar.friends
    })
}

const actionCreators = {}

export default connect<mapStateToPropsType, mapDispatchToPropsType, ownPropsType, globalStateType>(mapStateToProps, actionCreators)(Sidebar);