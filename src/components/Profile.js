import React from 'react';
import Background from "../assets/BC.png";
import Ava from "../assets/Ava.png";

const Profile = () => {
    return (
        <main className='content'>
            <div className='background' style={{backgroundImage: "url(" + Background + ")"}}/>
            <div className="author">
                <img src={Ava} alt="Avatar"/>
                <span>
                        Doodie
                        Moodie
                        <p>Junior Web-developer</p>
                        <p>Konvertraf LLC</p>
                    </span>
            </div>
            <div className="posts">
                <div className="createPost">
                    Create Post
                </div>
                <div className="post">
                    Post 1
                </div>
                <div className="post">
                    Post 2
                </div>
                <div className="post">
                    Post 3
                </div>
            </div>
        </main>
    )
}

export default Profile