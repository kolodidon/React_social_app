import React from 'react';
import s from './Sidebar.module.scss'

const Sidebar = () => {
    return (
        <aside className={s.nav}>
            <nav>
                <a href="/">Profile</a>
                <a href="/dialogs">Dialogs</a>
                <a href="/news">News</a>
                <a href="/music">Music</a>
                <a href="/settings">Settings</a>
            </nav>
        </aside>
    )
}

export default Sidebar