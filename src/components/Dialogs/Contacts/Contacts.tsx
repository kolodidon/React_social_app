import React from 'react'
import s from './Contacts.module.scss'
import Contact from "./Contact/Contact";

type PropsType = {
    contactData: Array<{id: number, name: string, avatar: any}>
}

const Contacts: React.FC<PropsType> = (props) => {

    let contactsElements = props.contactData.map( contact => <Contact key={contact.id} id={contact.id} name={contact.name} avatar={contact.avatar}/>)

    return(
        <div className={s.contacts}>
            { contactsElements }
        </div>
    )
}

export default Contacts