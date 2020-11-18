import React from 'react'
import s from './Dialogs.module.scss'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogData = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Doodie'},
        {id: 3, name: 'Moodie'},
        {id: 4, name: 'John'},
        {id: 5, name: 'Doe'},
    ]

    let dialogElements = dialogData.map( dialog => <Dialog id={dialog.id} name={dialog.name}/>)

    let messageData = [
        {id: 1, text: 'How are you doing with ur react stuff?'},
        {id: 2, text: 'Ain\'t ya doing ur app or smth?'},
        {id: 3, text: 'Wanna drink this evening?'}
    ]

    let messageElements = messageData.map( message => <Message id={message.id} text={message.text}/>)

    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                { dialogElements }
            </div>
            <div className = {s.messages}>
                { messageElements }
            </div>
        </div>
    )
}

export default Dialogs