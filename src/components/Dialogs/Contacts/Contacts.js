import React from 'react'
import s from './Contacts.module.scss'
import Contact from "./Contact/Contact";

const Contacts = (props) => {

    let contactsElements = props.data.map( contact => <Contact key={contact.id} id={contact.id} name={contact.name} avatar={contact.avatar}/>)

    return(
        <div className={s.contacts}>
            { contactsElements }
        </div>
    )
}

export default Contacts