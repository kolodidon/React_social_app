import React from 'react';
import s from './Friend.module.scss'

const Friend = (props) => {

    return (
        <div id={props.id} className={s.friend}>
            <img className={s.friendImage} src={props.avatar} alt="Ava"/>
            {props.name}<br/>{props.surname}
        </div>
    )
}

export default Friend