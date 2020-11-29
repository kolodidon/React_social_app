import React from 'react'
import s from './Messages.module.scss'
import MessagesList from "./MessageList/MessagesList";
import WriteMessage from "./WriteMessage/WriteMessage";

const Messages = (props) => {

    return(
        <div className = {s.messages}>

            <MessagesList data={props.data}/>

            <WriteMessage newMessageText={props.newMessageText} dispatch={props.dispatch}/>

        </div>
    )
}

export default Messages