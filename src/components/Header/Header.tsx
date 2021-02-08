import React from 'react';
import s from './Header.module.scss'
import Logo from "../../assets/logo.svg";
import {NavLink} from "react-router-dom";

type propsType = {
    login: string | null
    email: string | null
    isFetching: boolean
    isAuth: boolean
    logoutUserThunkCreator: () => void
}

const Header: React.FC<propsType> = (props) => {
    return (
        <header className = {s.header}>
            <div className = {s.logo}>
                <img src={Logo} alt='Logo'/>
                <span>Another React App</span>
            </div>
            <div className={s.loginBlock}>
                {(props.isAuth) 
                    ? <div>{props.login + ' ' + props.email}<button onClick={props.logoutUserThunkCreator}>Logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header