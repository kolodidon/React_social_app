import React from 'react'
import s from './WriteMessage.module.scss'

const WriteMessage = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.onAddMessage()
    }

    let MessageChange = () => {
        let text = newMessageElement.current.value
        props.onMessageChange(text)
    }

    return (
        <div className={s.writeMessage}>
            <textarea onChange={MessageChange} ref={newMessageElement} value={props.newMessageText} placeholder='Type your message...' className={s.writeMessageTextarea}></textarea>
            <button onClick={addMessage} className={s.writeMessageButton} type="submit">Post</button>
        </div>
    )
}

export default WriteMessage