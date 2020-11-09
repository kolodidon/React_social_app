import React from 'react';
import s from './Post.module.scss'

const Post = (props) => {
    return (
        <div className={s.post}>
            <img src={props.avatar} alt="Avatar"/>
            <div>{props.message}</div>
            <span>{props.likesCounter} Likes</span>
        </div>
    )
}

export default Post