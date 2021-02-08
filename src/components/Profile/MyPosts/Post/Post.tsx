import React from 'react';
import s from './Post.module.scss'

type PropsType = {
    key: number
    id: number
    avatar: any
    message: string
    likesCounter: number
}

const Post: React.FC<PropsType> = (props) => {
    return (
        <div className={s.post}>
            <img src={props.avatar} alt="Avatar"/>
            <div>{props.message}</div>
            <span>{props.likesCounter} Likes</span>
        </div>
    )
}

export default Post