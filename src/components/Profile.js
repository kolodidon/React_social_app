import React from 'react';
import s from'./Profile.module.scss'
import Background from "../assets/BC.png";
import Ava from "../assets/Ava.png";

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
            <div className={s.posts}>
                <div className={s.createPost}>
                    Create Post
                </div>
                <div className={s.post}>
                    Post 1
                </div>
                <div className={s.post}>
                    Post 2
                </div>
                <div className={s.post}>
                    Post 3
                </div>
            </div>
        </main>
    )
}

export default Profile