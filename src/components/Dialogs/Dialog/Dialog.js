import React from 'react'
import s from './Dialog.module.scss'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return(
        <div className={s.dialog}>
            <img className={s.dialogImage} src={props.avatar} alt="Avatar"/><NavLink to = {"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog