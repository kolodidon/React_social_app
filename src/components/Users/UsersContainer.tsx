import React from 'react'
import {connect} from "react-redux"
import {getUsersThunkCreator, followThunkCreator, unfollowThunkCreator} from "../../redux/users-reducer"
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { UserType } from '../../redux/users-reducer'
import { globalStateType } from '../../redux/redux-store'

type MapStatePropsType = {
    totalUsersCount: number
    pageSize: number
    portionSize: number
    currentPage: number
    users: Array<UserType>
    followingInProgress: Array<number>
    isFetching: boolean
}
type MapDispatchPropsType = {
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    followThunkCreator: (userId: number) => void
    unfollowThunkCreator: (userId: number) => void
}
type OwnPropsType = {}
type UsersComponentPropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersComponent extends React.Component<UsersComponentPropsType> {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }
    changeCurrentPage: (page: number) => void = (page) => {
        this.props.getUsersThunkCreator(page, this.props.pageSize)
    }
    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    portionSize={this.props.portionSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    followingInProgress={this.props.followingInProgress}
                    changeCurrentPage={this.changeCurrentPage}
                    followThunkCreator={this.props.followThunkCreator}
                    unfollowThunkCreator={this.props.unfollowThunkCreator}
                />
            </>
        )
    }
}


let mapStateToProps = (state: globalStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        portionSize: state.usersPage.portionSize,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

let mapDispatchToProps = {getUsersThunkCreator, followThunkCreator, unfollowThunkCreator}

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, globalStateType>(mapStateToProps, mapDispatchToProps)(UsersComponent)