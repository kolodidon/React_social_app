import React from 'react'
import s from './Users.module.scss'
import Ava from "../../assets/Ava.png";
import { NavLink } from 'react-router-dom';
import Paginator from  './Paginator';
import { UserType } from '../../redux/users-reducer'

type UsersPropsTypes =  {
    totalUsersCount: number
    pageSize: number
    portionSize: number
    currentPage: number
    users: Array<UserType>
    followingInProgress: Array<number>
    changeCurrentPage: (page: number) => void
    unfollowThunkCreator: (userId: number) => void
    followThunkCreator: (userId: number) => void
}
let Users: React.FC<UsersPropsTypes> = ({totalUsersCount, pageSize, portionSize, currentPage, users, followingInProgress, changeCurrentPage, followThunkCreator, unfollowThunkCreator}) => {
    return (
        (
            <div>
                <Paginator 
                    totalUsersCount={totalUsersCount} 
                    pageSize={pageSize} 
                    changeCurrentPage={changeCurrentPage} 
                    currentPage={currentPage} 
                    portionSize={portionSize} 
                    styles={s} 
                />

                <div className={s.main}>
                    {
                        users.map(u => <div key={u.id}>
                            <span>
                                <div>
                                    <NavLink to={'/profile/' + u.id + '/'}>
                                        <img className={s.photo} src={u.photos.small !== null ? u.photos.small : Ava} alt='avatar' />
                                    </NavLink>
                                </div>
                            </span>
                            <span>
                                {u.followed
                                    ? <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                        unfollowThunkCreator(u.id)
                                    }}>Unfollow</button>
                                    : <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                        followThunkCreator(u.id)
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