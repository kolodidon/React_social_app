import React from 'react'
import s from './Users.module.scss'
import Ava from "../../assets/Ava.png";
import { NavLink } from 'react-router-dom';
import Paginator from  './Paginator'

let Users = (props) => {

    return (
        (
            <div>
                <Paginator 
                    totalUsersCount={props.totalUsersCount} 
                    pageSize={props.pageSize} 
                    changeCurrentPage={props.changeCurrentPage} 
                    currentPage={props.currentPage} 
                    portionSize={props.portionSize} 
                    styles={s} 
                />

                <div className={s.main}>
                    {
                        props.users.map(u => <div key={u.id}>
                            <span>
                                <div>
                                    <NavLink to={'/profile/' + u.id + '/'}>
                                        <img className={s.photo} src={u.photos.small !== null ? u.photos.small : Ava} alt='avatar' />
                                    </NavLink>
                                </div>
                            </span>
                            <span>
                                {u.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                        props.unfollowThunkCreator(u.id)
                                    }}>Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                        props.followThunkCreator(u.id)
                                    }}>Follow</button>}
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
            </div>
        )
    )
}

export default Users