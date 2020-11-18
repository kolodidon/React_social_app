import React from 'react';
import s from './MyPosts.module.scss'
import Post from "./Post/Post";
import Ava from "../../../assets/Ava.png";
import Message from "../../Dialogs/Message/Message";

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Whassaup homie!', likesCounter: 25},
        {id: 2, message: 'Hawaya doin here?', likesCounter: 10},
        {id: 3, message: 'Exdee git rect', likesCounter: 6}
    ]

    let postElements = postData.map( post => <Post id={post.id} avatar={Ava} message={post.message} likesCounter={post.likesCounter}/>)

    return (
        <div className={s.posts}>
            <h2>My Posts</h2>
            <div className={s.createPost}>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.postList}>
                { postElements }
            </div>
        </div>
    )
}

export default MyPosts