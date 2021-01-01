import React from 'react'
import s from './Dialogs.module.scss'
import Contacts from "./Contacts/Contacts";
import WriteMessage from "./Messages/WriteMessage/WriteMessage"
import { Redirect } from 'react-router-dom';

const Dialogs = (props) => {

    if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={s.dialogsWrapper}>

            <Contacts contactData={props.contactData}/>

            <div className = {s.messages}>
                <WriteMessage 
                    messageData={props.messageData} 
                    newMessageText={props.newMessageText} 
                    onMessageChange={props.onMessageChange}
                    onAddMessage={props.onAddMessage}
                />
            </div>
        </div>
    )
}

export default Dialogs