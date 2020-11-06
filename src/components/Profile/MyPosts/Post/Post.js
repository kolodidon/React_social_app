import React from 'react';
import s from './Post.module.scss'

const Post = () => {
    return (
        <div className={s.post}>
            <img src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png" alt="Avatar"/>
            <div>Post 1</div>
            <span>Like</span>
        </div>
    )
}

export default Post