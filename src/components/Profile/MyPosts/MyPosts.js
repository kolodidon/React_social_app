import React from 'react';
import s from './MyPosts.module.scss'
import Post from "./Post/Post";
import Ava from "../../../assets/Ava.png";

const MyPosts = () => {
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
                <Post avatar={Ava} message="Whassaup homie!" likesCounter="25"/>
                <Post avatar={Ava} message="Hawaya doin here?" likesCounter="10"/>
                <Post avatar={Ava} message="Exdee git rect" likesCounter="6"/>
            </div>
        </div>
    )
}

export default MyPosts