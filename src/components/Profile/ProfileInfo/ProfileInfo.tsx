import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.scss'
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import Ava from '../../../assets/Ava.png'
import UploadAvatar from './UploadAvatar/UploadAvatar'
import UploadInfo from './UploadInfo/UploadInfo'
import {ProfileType} from '../../../redux/profile-reducer'

type PropsType = {
    profile: ProfileType | null
    status: string
    isAuth: boolean
    userId: number | null
    myId: number | null
    changeUserStatusThunkCreator: (statusText: string) => void
    sendAvatarThunkCreator: (image: any) => void
    sendInfoThunkCreator: (info: any) => void
}

const ProfileInfo: React.FC<PropsType> = ({profile, status, isAuth, userId, myId, changeUserStatusThunkCreator, sendAvatarThunkCreator, sendInfoThunkCreator}) => {
    if(!profile) {
        return(
            <Preloader/>
        )
    }
    return (
            <div className={s.author}>
                {/* @ts-ignore */}
                <img src={((typeof profile.photos === 'undefined') || (profile === null)) ? Ava : profile.photos.large} alt="Avatar"/>
                <span>
                        {profile.fullName}
                        <p>{profile.aboutMe}</p>
                        <p>{(profile.lookingForAJob) ? 'Ищу работу' : 'Не ищу работу'}</p>
                        <p>{profile.lookingForAJobDescription}</p>
                </span>

                <span>
                    <ProfileStatusWithHooks
                        status={status}
                        userId={userId}
                        isAuth={isAuth}
                        myId={myId}
                        changeUserStatusThunkCreator={changeUserStatusThunkCreator}
                    />
                </span>

                <span>
                    <UploadAvatar
                        userId={userId}
                        isAuth={isAuth}
                        myId={myId}
                        sendAvatarThunkCreator={sendAvatarThunkCreator}
                    />
                </span>
                
                <span>
                    <UploadInfo
                        userId={userId}
                        isAuth={isAuth}
                        myId={myId}
                        sendInfoThunkCreator={sendInfoThunkCreator}
                    />
                </span>
                <span>
                    Контакты:
                    {Object.keys(profile.contacts).map(key => {
                        return (profile.contacts[key]) ? <p key={key}>{key}: {profile.contacts[key]}</p> : null ;
                    })}
                </span>
            </div>
    )
}

export default ProfileInfo

