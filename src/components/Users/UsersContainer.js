import React from 'react'
import {connect} from "react-redux";
import {unfollow, setPage, setTotalUsersCount, getUsersThunkCreator, followThunkCreator, unfollowThunkCreator} from "../../redux/users-reducer";
import Users from './Users'
import Preloader from '../common/Preloader/Preloader';


class UsersComponent extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }
    changeCurrentPage = (page) => {
        this.props.getUsersThunkCreator(page, this.props.pageSize)
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
                    followingInProgress={this.props.followingInProgress}
                    followThunkCreator={this.props.followThunkCreator}
                    unfollowThunkCreator={this.props.unfollowThunkCreator}
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

let actionCreators = {unfollow, setPage, setTotalUsersCount, getUsersThunkCreator, followThunkCreator, unfollowThunkCreator}

export default connect(mapStateToProps, actionCreators)(UsersComponent);