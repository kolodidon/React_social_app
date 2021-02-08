import React from 'react'
import s from './Contact.module.scss'
import {NavLink} from "react-router-dom";

type PropsType = {
    key: number
    id: number
    name: string
    avatar: any
}


const Contact: React.FC<PropsType> = (props) => {
    return(
        <div className={s.contact}>
            <img className={s.contactImage} src={props.avatar} alt="Avatar"/><NavLink to = {"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default Contact