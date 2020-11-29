import React from 'react'
import s from './Contact.module.scss'
import {NavLink} from "react-router-dom";

const Contact = (props) => {
    return(
        <div className={s.contact}>
            <img className={s.contactImage} src={props.avatar} alt="Avatar"/><NavLink to = {"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default Contact