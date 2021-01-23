import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.scss'
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import Ava from '../../../assets/Ava.png'
import UploadAvatar from './UploadAvatar/UploadAvatar'
import UploadInfo from './UploadInfo/UploadInfo'


const ProfileInfo = (props) => {
    if(!props.profile) {
        return(
            <Preloader/>
        )
    }

    return (
            <div className={s.author}>
                <img src={props.profile.photos.large || Ava} alt="Avatar"/>
                <span>
                        {props.profile.fullName}
                        <p>{props.profile.aboutMe}</p>
                        <p>{(props.profile.lookingForAJob) ? 'Ищу работу' : 'Не ищу работу'}</p>
                        <p>{props.profile.lookingForAJobDescription}</p>
                </span>

                <span>
                    <ProfileStatusWithHooks
                        status={props.status}
                        userId={props.userId}
                        isAuth={props.isAuth}
                        myId={props.myId}
                        setUserStatus={props.setUserStatus}
                        changeUserStatusThunkCreator={props.changeUserStatusThunkCreator}
                    />
                </span>

                <span>
                    <UploadAvatar
                        userId={props.userId}
                        isAuth={props.isAuth}
                        myId={props.myId}
                        sendAvatarThunkCreator={props.sendAvatarThunkCreator}
                    />
                </span>
                
                <span>
                    <UploadInfo
                        userId={props.userId}
                        isAuth={props.isAuth}
                        myId={props.myId}
                        sendInfoThunkCreator={props.sendInfoThunkCreator}
                    />
                </span>
                <span>
                    Контакты:
                    {Object.keys(props.profile.contacts).map(key => {
                        return (props.profile.contacts[key]) ? <p key={key}>{key}: {props.profile.contacts[key]}</p> : null ;
                    })}
                </span>
            </div>
    )
}

export default ProfileInfo

