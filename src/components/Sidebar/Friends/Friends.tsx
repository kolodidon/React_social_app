import React from 'react';
import s from './Friends.module.scss'
import Friend from "./Friend/Friend";
import { friendType } from '../../../redux/sidebar-reducer';

type PropsType = {
    friends: Array<friendType>
}

const Friends: React.FC<PropsType> = (props) => {

    let friendsElements = props.friends.map( friend =>
        <Friend key={friend.id} id={friend.id} avatar={friend.avatar} name={friend.name} surname={friend.surname}/>)

    return (
        <div className={s.friendsWrapper}>
            <span className={s.friendsTitle}>Friends</span>
            <div className={s.friends}>
                { friendsElements }
            </div>
        </div>
    )
}

export default Friends