import React from 'react';
import s from './Profile.module.scss'
import Background from "../../assets/BC.png";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {PropsType} from "./ProfileContainer"

type ProfileAddInfo = {
    userId: number | null
    myId: number | null
}

const Profile: React.FC<PropsType & ProfileAddInfo> = ({profile, status, id, isFetching, isAuth, getUserProfileThunkCreator, getUserStatusThunkCreator, changeUserStatusThunkCreator, sendAvatarThunkCreator, sendInfoThunkCreator, userId, myId}) => {

    return (
        <main className={s.profile}>
            <div className={s.background} style={{backgroundImage: "url(" + Background + ")"}}/>

            <ProfileInfo 
                profile={profile} 
                status={status} 
                isAuth={isAuth} 
                userId={userId}
                myId={myId}
                changeUserStatusThunkCreator={changeUserStatusThunkCreator}
                sendAvatarThunkCreator={sendAvatarThunkCreator}
                sendInfoThunkCreator={sendInfoThunkCreator}
            />
            
            <MyPostsContainer/>

        </main>
    )
}

export default Profile