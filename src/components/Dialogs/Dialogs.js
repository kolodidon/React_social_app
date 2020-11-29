import React from 'react'
import s from './Dialogs.module.scss'
import Contacts from "./Contacts/Contacts";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {

    return (
        <div className={s.dialogsWrapper}>

            <Contacts data={props.data.contactData}/>

            <Messages data={props.data.messageData} newMessageText={props.data.newMessageText} dispatch={props.dispatch}/>

        </div>
    )
}

export default Dialogs