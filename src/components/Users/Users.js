import React from 'react';
import s from './Users.module.scss'
import * as axios from 'axios'
import Ava from "../../assets/Ava.png";


class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(responce => {
            this.props.setUsers(responce.data.items);
            responce.data.totalCount > 100 ? this.props.setTotalUsersCount(100) : this.props.setTotalUsersCount(responce.data.totalCount);
        })
    }
    changeCurrentPage = (page) => {
        this.props.setPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(responce => {
            this.props.setUsers(responce.data.items)
        })
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div className={s.pagCont}>
                    {pages.map( page => {
                        return (
                            <span
                                key={page}
                                onClick={ () => {this.changeCurrentPage(page)} }
                                className={ (this.props.currentPage === page) ? `${s.selectedPage} ${s.pagBtn}` : `${s.pagBtn}` }>{page}
                            </span>
                        )
                    })}
                </div>
                <div className={s.main}>
                    {
                        this.props.users.map(u => <div key={u.id}>
                            <span>
                                <div>
                                    <img className={s.photo} src={u.photos.small !== null ? u.photos.small : Ava} alt='avatar' />
                                </div>
                            </span>
                            <span>
                                {u.followed ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button> : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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
    }
}

export default Users