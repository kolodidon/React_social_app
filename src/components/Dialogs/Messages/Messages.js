import React from 'react'
import s from './Messages.module.scss'
import WriteMessageContainer from "./WriteMessage/WriteMessageContainer";

const Messages = (props) => {

    return(
        <div className = {s.messages}>

            <WriteMessageContainer />

        </div>
    )
}

export default Messages