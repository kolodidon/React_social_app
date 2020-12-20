import React from 'react'
import {connect} from "react-redux";
import {follow, setUsers, unfollow, setPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress} from "../../redux/users-reducer";
import Users from './Users'
import Preloader from '../common/Preloader/Preloader';
import usersAPI from '../../api/api';


class UsersComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(responce => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(responce.items);
            responce.totalCount > 100 ? this.props.setTotalUsersCount(100) : this.props.setTotalUsersCount(responce.totalCount);
        })
    }
    changeCurrentPage = (page) => {
        this.props.setPage(page)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(page, this.props.pageSize).then(responce => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(responce.items)
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
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

let actionCreators = {follow, unfollow, setUsers, setPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress}

export default connect(mapStateToProps, actionCreators)(UsersComponent);