import React from 'react';
import s from './MyPosts.module.scss'
import Post from "./Post/Post";
import Ava from "../../../assets/Ava.png";
import {addPostActionCreator, catchPostTextActionCreator} from "../../../redux/profile-reducer";



const MyPosts = (props) => {

    let postElements = props.postData.map( post => <Post key={post.id} id={post.id} avatar={Ava} message={post.message} likesCounter={post.likesCounter}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        let action = catchPostTextActionCreator(text);
        props.dispatch(action)
    }

    return (
        <div className={s.posts}>
            <h2>My Posts</h2>
            <div className={s.createPost}>
                <div><textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} /></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.postList}>
                { postElements }
            </div>
        </div>
    )
}

export default MyPosts