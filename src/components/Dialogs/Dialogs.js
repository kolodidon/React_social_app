import React from 'react'
import s from './Dialogs.module.scss'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                <Dialog id = '1' name = 'Alex'/>
                <Dialog id = '2' name = 'Doodie'/>
                <Dialog id = '3' name = 'Moodie'/>
                <Dialog id = '4' name = 'John'/>
                <Dialog id = '5' name = 'Doe'/>
            </div>
            <div className={s.messages}>
                <Message text="How are you doing with ur react stuff?"/>
                <Message text="Ain't ya doing ur app or smth?"/>
                <Message text="Wanna drink this evening?"/>
            </div>
        </div>
    )
}

export default Dialogs