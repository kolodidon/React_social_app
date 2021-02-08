import React from 'react'
import s from './WriteMessage.module.scss'
import Message from "../MessageList/Message/Message"
import { Formik, Form } from 'formik'
import * as yup from 'yup'

type PropsType = {
    messageData: Array<{id: number, text: string}>
    onAddMessage: (text: string) => void
}
type MessageFormPropsType = {
    onAddMessage: (text: string) => void
}
type MyFormValues = {
    message: string;
}

const WriteMessage: React.FC<PropsType> = (props) => {
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

const MessageForm: React.FC<MessageFormPropsType> = (props) => {
    const initialValues: MyFormValues = { message: '' };
    const validationSchema = yup.object().shape({
        message: yup.string().required('Type your message'),
    })
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={( values, {resetForm} ) => {
                props.onAddMessage(values.message)
                resetForm({})
            }}
            validationSchema={validationSchema}
        >
            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                <Form className={s.writeMessage}>
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
                        type={'submit'}
                    >Send
                    </button>
                    {touched.message && errors.message && <p className={s.error}>{errors.message}</p>}
                </Form>
            )}
        </Formik>
    )
}

export default WriteMessage