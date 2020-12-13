import React from 'react';
import s from './Users.module.scss'
import * as axios from 'axios'
import Ava from "../../assets/Ava.png";

let Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0 ) (
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(responce => {
                props.setUsers(responce.data.items)
            })
        )
    }
    return(
        <div className={s.main}>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map( u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.photo} src={ u.photos.small !== null ? u.photos.small : Ava } alt='avatar'/>
                        </div>
                    </span>
                    <span>
                        {u.followed ? <button onClick={ () => props.unfollow(u.id) }>Unfollow</button> : <button onClick={ () => props.follow(u.id) }>Follow</button>}
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>Russia</div>
                            <div>Moscow</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users