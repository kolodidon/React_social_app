import React from 'react';
import s from './Sidebar.module.scss'

const Sidebar = () => {
    return (
        <aside className={s.nav}>
            <nav>
                <a href="#1">Profile</a>
                <a href="#2">Messages</a>
                <a href="#3">News</a>
                <a href="#4">Music</a>
                <a href="#5">Settings</a>
            </nav>
        </aside>
    )
}

export default Sidebar