import React from 'react';
import s from './Profile.module.scss'
import Background from "../../assets/BC.png";
import Ava from "../../assets/Ava.png";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <main className={s.profile}>
            <div className={s.background} style={{backgroundImage: "url(" + Background + ")"}}/>
            <div className={s.author}>
                <img src={Ava} alt="Avatar"/>
                <span>
                        Doodie
                        Moodie
                        <p>Junior Web-developer</p>
                        <p>Konvertraf LLC</p>
                    </span>
            </div>
            <MyPosts/>
        </main>
    )
}

export default Profile