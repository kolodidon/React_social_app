import React from 'react';
import s from './MyPosts.module.scss'
import Post from "./Post/Post";
import Ava from "../../../assets/Ava.png";
import { Formik } from 'formik'
import * as yup from 'yup'

const MyPosts = React.memo(props => {
    let postElements = props.postData.map(post => <Post key={post.id} id={post.id} avatar={Ava} message={post.message} likesCounter={post.likesCounter} />)
    return (
        <div className={s.posts}>
            <h2>My Posts</h2>

            <PostForm addPost={props.addPost} />

            <div className={s.postList}>
                {postElements}
            </div>
        </div>
    )
})

const PostForm = (props) => {
    let onAddPost = (postText) => {
        props.addPost(postText)
    }
    const validationSchema = yup.object().shape({
        newPost: yup.string().required('First type your post\'s text'),
    })
    return (
        <Formik
            initialValues={{
                newPost: ''
            }}
            onSubmit={(values, { resetForm }) => {
                onAddPost(values.newPost)
                resetForm({ values: '' })
            }}
            validationSchema={validationSchema}
        >
            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                <form className={s.writeMessage}>
                    <textarea
                        placeholder='Type your post...'
                        name={"newPost"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.newPost}
                    />

                    <button
                        disabled={!isValid && !dirty}
                        onClick={handleSubmit}
                        type={'submit'}
                    >Add Post
                    </button>

                    {touched.newPost && errors.newPost && <p className={s.error}>{errors.newPost}</p>}
                </form>
            )}
        </Formik>
    )
}

export default MyPosts