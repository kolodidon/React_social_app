import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.scss'
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import Ava from '../../../assets/Ava.png'
import UploadAvatar from './UploadAvatar/UploadAvatar'


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
                    Контакты:
                    {(props.profile.contacts.facebook) ? <p>Facebook: {props.profile.contacts.facebook}</p> : null }
                    {(props.profile.contacts.github) ? <p>GitHub: {props.profile.contacts.github}</p> : null }
                    {(props.profile.contacts.instagram) ? <p>Instagram: {props.profile.contacts.instagram}</p> : null }
                    {(props.profile.contacts.mainLink) ? <p>Link: {props.profile.contacts.mainLink}</p> : null }
                    {(props.profile.contacts.twitter) ? <p>Twitter: {props.profile.contacts.twitter}</p> : null }
                    {(props.profile.contacts.vk) ? <p>VK: {props.profile.contacts.vk}</p> : null }
                    {(props.profile.contacts.website) ? <p>Website: {props.profile.contacts.website}</p> : null }
                    {(props.profile.contacts.youtube) ? <p>Youtube: {props.profile.contacts.youtube}</p> : null }
                </span>
            </div>
    )
}

export default ProfileInfo