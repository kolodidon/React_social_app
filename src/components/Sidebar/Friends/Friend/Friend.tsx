import React from 'react';
import s from './Friend.module.scss'

type PropsType = {
    key: number
    id: number
    avatar: any
    name: string
    surname: string
}

const Friend: React.FC<PropsType> = (props) => {
    return (
        <div id={String(props.id)} className={s.friend}>
            <img className={s.friendImage} src={props.avatar} alt="Ava"/>
            {props.name}<br/>{props.surname}
        </div>
    )
}

export default Friend