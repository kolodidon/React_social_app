import React from 'react'
import s from './Users.module.scss'
import Ava from "../../assets/Ava.png";
import { NavLink } from 'react-router-dom';
import usersAPI from '../../api/api';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        (
            <div>
                <div className={s.pagCont}>
                    {pages.map(page => {
                        return (
                            <span
                                key={page}
                                onClick={() => { props.changeCurrentPage(page) }}
                                className={(props.currentPage === page) ? `${s.selectedPage} ${s.pagBtn}` : `${s.pagBtn}`}>{page}
                            </span>
                        )
                    })}
                </div>
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
                                    ? <button onClick={() => {
                                        usersAPI.unfollowUser(u.id)
                                            .then(responce => {
                                                if (responce.resultCode === 0) {
                                                    props.unfollow(u.id)
                                                }
                                            })
                                    }}>Unfollow</button>
                                    : <button onClick={() => {

                                        usersAPI.followUser(u.id)
                                            .then(responce => {
                                                if (responce.resultCode === 0) {
                                                    props.follow(u.id)
                                                }
                                            })
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