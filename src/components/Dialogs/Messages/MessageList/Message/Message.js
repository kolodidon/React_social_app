import React from 'react'
import s from './Message.module.scss'

const Message = (props) => {
    return(
        <span className={s.message}>{props.text}</span>
    )
}

export default Message