import React from 'react'
import s from './Messages.module.scss'
import MessagesList from "./MessageList/MessagesList";
import WriteMessageContainer from "./WriteMessage/WriteMessageContainer";

const Messages = (props) => {

    let state = props.store.getState()

    return(
        <div className = {s.messages}>

            <MessagesList data={state.messagesPage.messageData}/>

            <WriteMessageContainer store={props.store}/>

        </div>
    )
}

export default Messages