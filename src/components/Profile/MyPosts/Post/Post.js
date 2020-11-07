import React from 'react';
import s from './Post.module.scss'

const Post = (props) => {
    return (
        <div className={s.post}>
            <img src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png" alt="Avatar"/>
            <div>{props.message}</div>
            <span>{props.likesCounter} Likes</span>
        </div>
    )
}

export default Post