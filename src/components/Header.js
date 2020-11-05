import React from 'react';
import Logo from "../assets/logo.svg";

const Header = () => {
    return (
        <header className='header'>
            <div className="logo">
                <img src={Logo} alt='Logo'/>
                <span>Another React App</span>
            </div>
        </header>
    )
}

export default Header