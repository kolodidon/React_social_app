import React from 'react'
import s from './WriteMessage.module.scss'
import Message from "../MessageList/Message/Message"
import { Formik } from 'formik'
import * as yup from 'yup'

const WriteMessage = (props) => {

    let messageElements = props.messageData.map(message => <Message key={message.id} id={message.id} text={message.text} />)

    return (
        <>
            <div className={s.messagesList}>
                {messageElements}
            </div>

            <MessageForm
                onAddMessage={props.onAddMessage}
            />
        </>
    )
}

const MessageForm = (props) => {
    const validationSchema = yup.object().shape({
        message: yup.string().required('First type your message'),
    })
    return (
        <Formik
            initialValues={{
                message: ''
            }}
            onSubmit={( values, {resetForm} ) => {
                props.onAddMessage(values.message)
                resetForm({ values: '' })
            }}
            validationSchema={validationSchema}
        >
            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                <form className={s.writeMessage}>
                    <textarea
                        className={s.writeMessageTextarea}
                        placeholder='Type your message...'
                        name={"message"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                    />

                    <button
                        className={s.writeMessageButton}
                        disabled={!isValid && !dirty}
                        onClick={handleSubmit}
                        type={'submit'}
                    >Send
                    </button>

                    {touched.message && errors.message && <p className={s.error}>{errors.message}</p>}
                </form>
            )}
        </Formik>
    )
}

export default WriteMessage