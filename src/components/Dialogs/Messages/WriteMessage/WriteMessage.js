import React from 'react'
import s from './WriteMessage.module.scss'
import Message from "../MessageList/Message/Message";

const WriteMessage = (props) => {

    let messageElements = props.messageData.map(message => <Message key={message.id} id={message.id} text={message.text}/>)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.onAddMessage()
    }

    let MessageChange = () => {
        let text = newMessageElement.current.value
        props.onMessageChange(text)
    }

    return (
        <React.Fragment>
            <div className={s.messagesList}>
                {messageElements}
            </div>

            <div className={s.writeMessage}>
                <textarea onChange={MessageChange} ref={newMessageElement} value={props.newMessageText} placeholder='Type your message...' className={s.writeMessageTextarea}></textarea>
                <button onClick={addMessage} className={s.writeMessageButton} type="submit">Post</button>
            </div>
        </React.Fragment>
    )
}

export default WriteMessage