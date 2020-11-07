import React from 'react';
import s from './MyPosts.module.scss'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div className={s.posts}>
                <div className={s.createPost}>
                    <textarea></textarea>
                    <button>Add post</button>
                    <button>Remove post</button>
                </div>

                <Post message="Whassaup homie!" likesCounter="25"/>

                <Post message="Hawaya doin here?" likesCounter="10"/>

                <Post message="Exdee git rect" likesCounter="6"/>

            </div>
    )
}

export default MyPosts