import React from 'react';
import s from './Sidebar.module.scss'
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className={s.nav}>
            <nav>
                <NavLink activeClassName = {s.active} exact to="/">Profile</NavLink>
                <NavLink activeClassName = {s.active} to="/dialogs">Dialogs</NavLink>
                <NavLink activeClassName = {s.active} to="/news">News</NavLink>
                <NavLink activeClassName = {s.active} to="/music">Music</NavLink>
                <NavLink activeClassName = {s.active} to="/settings">Settings</NavLink>
            </nav>
        </aside>
    )
}

export default Sidebar