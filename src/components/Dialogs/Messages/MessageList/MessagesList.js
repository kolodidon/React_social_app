import React from 'react'
import s from './MessagesList.module.scss'
import Message from './Message/Message'


const MessagesList = (props) => {

    let messageElements = props.data.map(message => <Message key={message.id} id={message.id} text={message.text}/>)

    return (
        <div className={s.messagesList}>
            {messageElements}
        </div>
    )
}

export default MessagesList