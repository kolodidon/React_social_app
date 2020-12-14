import React from 'react'
import s from './Dialogs.module.scss'
import Contacts from "./Contacts/Contacts";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {

    let state = props.store.getState()

    return (
        <div className={s.dialogsWrapper}>

            <Contacts data={state.messagesPage.contactData}/>

            <Messages/>

        </div>
    )
}

export default Dialogs