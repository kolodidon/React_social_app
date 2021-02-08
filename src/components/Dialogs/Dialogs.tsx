import React from 'react'
import s from './Dialogs.module.scss'
import Contacts from "./Contacts/Contacts";
import WriteMessage from "./Messages/WriteMessage/WriteMessage"
import { Redirect } from 'react-router-dom';

type PropsType = {
    messageData: Array<{id: number, text: string}>
    contactData: Array<{id: number, name: string, avatar: any}>
    isAuth: boolean
    onAddMessage: (text: string) => void
}

const Dialogs: React.FC<PropsType> = (props) => {
    if (!props.isAuth) return <Redirect to={"/login"}/>
    return (
        <div className={s.dialogsWrapper}>
            <Contacts contactData={props.contactData}/>
            <div className = {s.messages}>
                <WriteMessage 
                    messageData={props.messageData} 
                    onAddMessage={props.onAddMessage}
                />
            </div>
        </div>
    )
}

export default Dialogs