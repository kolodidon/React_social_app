import React from 'react';
import s from './Profile.module.scss'
import Background from "../../assets/BC.png";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <main className={s.profile}>
            <div className={s.background} style={{backgroundImage: "url(" + Background + ")"}}/>

            <ProfileInfo profile={props.profile}/>
            
            <MyPostsContainer/>

        </main>
    )
}

export default Profile