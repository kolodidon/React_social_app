import React from 'react';
import s from './MyPosts.module.scss'
import { Form, Formik } from 'formik'
import * as yup from 'yup'

type PropsType = {
    addPost: (postText: string) => void
}
type FormValuesTypes = {
    newPost: string
}

const PostForm: React.FC<PropsType> = (props) => {
    let onAddPost = (postText: string) => {
        props.addPost(postText)
    }
    const validationSchema = yup.object().shape({
        newPost: yup.string().required('First type your post\'s text'),
    })
    const initialValues: FormValuesTypes = {
        newPost: ''
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, { resetForm }) => {
                onAddPost(values.newPost)
                resetForm({})
            }}
            validationSchema={validationSchema}
        >
            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                <Form className={s.writeMessage}>
                    <textarea
                        placeholder='Type your post...'
                        name={"newPost"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.newPost}
                    />

                    <button
                        disabled={!isValid && !dirty}
                        type={'submit'}
                    >Add Post
                    </button>

                    {touched.newPost && errors.newPost && <p className={s.error}>{errors.newPost}</p>}
                </Form>
            )}
        </Formik>
    )
}

export default PostForm