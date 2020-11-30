import React from 'react'
import {addMessageActionCreator, catchMessageTextActionCreator} from "../../../../redux/dialogs-reducer";
import WriteMessage from "./WriteMessage";


const WriteMessageContainer = (props) => {

    let state = props.store.getState()

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        let action = catchMessageTextActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <WriteMessage newMessageText={state.messagesPage.newMessageText} onAddMessage={addMessage} onMessageChange={onMessageChange} />
    )
}

export default WriteMessageContainer