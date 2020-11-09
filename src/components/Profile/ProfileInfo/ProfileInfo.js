import React from 'react';
import s from './ProfileInfo.module.scss'


const ProfileInfo = (props) => {
    return (
            <div className={s.author}>
                <img src={props.avatar} alt="Avatar"/>
                <span>
                        {props.firstName}&nbsp;{props.surname}
                        <p>Junior Web-developer</p>
                        <p>Konvertraf LLC</p>
                    </span>
            </div>
    )
}

export default ProfileInfo