import React from 'react';
import s from './Header.module.scss'
import Logo from "../../assets/logo.svg";

const Header = () => {
    return (
        <header className = {s.header}>
            <div className = {s.logo}>
                <img src={Logo} alt='Logo'/>
                <span>Another React App</span>
            </div>
        </header>
    )
}

export default Header