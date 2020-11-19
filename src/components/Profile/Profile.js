import React from 'react';
import s from './Profile.module.scss'
import Background from "../../assets/BC.png";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Ava from "../../assets/Ava.png";

const Profile = (props) => {
    return (
        <main className={s.profile}>
            <div className={s.background} style={{backgroundImage: "url(" + Background + ")"}}/>

            <ProfileInfo avatar={Ava} firstName='Doodie' surname="Moodie" position="Junior Web-developer" workPlace="Konvertraf LLC"/>

            <MyPosts postData={props.data.postData}/>
        </main>
    )
}

export default Profile