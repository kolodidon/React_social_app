import React from 'react'
import {connect} from "react-redux";
import {follow, setUsers, unfollow, setPage, setTotalUsersCount, toggleIsFetching} from "../../redux/users-reducer";
import * as axios from 'axios'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader';


class UsersComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, 
        {
            withCredentials: true
        })
            .then(responce => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(responce.data.items);
                responce.data.totalCount > 100 ? this.props.setTotalUsersCount(100) : this.props.setTotalUsersCount(responce.data.totalCount);
            })
    }
    changeCurrentPage = (page) => {
        this.props.setPage(page)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`, 
        {
            withCredentials: true
        })
            .then(responce => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(responce.data.items)
            })
    }
    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    changeCurrentPage={this.changeCurrentPage}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let actionCreators = {follow, unfollow, setUsers, setPage, setTotalUsersCount, toggleIsFetching}

export default connect(mapStateToProps, actionCreators)(UsersComponent);