import React from 'react';
import s from './Profile.module.scss'
import Background from "../../assets/BC.png";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Ava from "../../assets/Ava.png";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <main className={s.profile}>
            <div className={s.background} style={{backgroundImage: "url(" + Background + ")"}}/>

            <ProfileInfo avatar={Ava} firstName='Doodie' surname="Moodie" position="Junior Web-developer" workPlace="Konvertraf LLC"/>

            <MyPostsContainer/>

            {/*<MyPostsContainer store={props.store}/>*/}

        </main>
    )
}

export default Profile