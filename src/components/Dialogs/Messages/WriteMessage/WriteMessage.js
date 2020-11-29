import React from 'react'
import s from './WriteMessage.module.scss'
import {addMessageActionCreator, catchMessageTextActionCreator} from "../../../../redux/dialogs-reducer";


const WriteMessage = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value
        let action = catchMessageTextActionCreator(text)
        props.dispatch(action)
    }

    return (
        <div className={s.writeMessage}>
            <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText} placeholder='Type your message...' className={s.writeMessageTextarea}></textarea>
            <button onClick={addMessage} className={s.writeMessageButton} type="submit">Post</button>
        </div>
    )
}

export default WriteMessage