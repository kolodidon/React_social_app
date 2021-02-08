import React from 'react'
import s from './Message.module.scss'

type PropsType = {
    key: number
    id: number
    text: string
}

const Message: React.FC<PropsType> = (props) => {
    return(
        <span className={s.message}>{props.text}</span>
    )
}

export default Message