import React from 'react';
import Profile from './Profile'
import {connect} from "react-redux";
import { withRouter, RouteComponentProps  } from 'react-router-dom';
import {globalStateType} from '../../redux/redux-store'
import {getUserProfileThunkCreator, getUserStatusThunkCreator, changeUserStatusThunkCreator, sendAvatarThunkCreator, sendInfoThunkCreator, ProfileType} from '../../redux/profile-reducer'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import { compose } from 'redux';
import Preloader from '../common/Preloader/Preloader';
type MapStatePropsType = {
    profile: ProfileType | null
    status: string
    id: number
    isFetching: boolean
    isAuth: boolean
}
type MapDispatchPropsType = {
    getUserProfileThunkCreator: (userId: number) => void
    getUserStatusThunkCreator: (userId: number) => void
    changeUserStatusThunkCreator: (statusText: string) => void
    sendAvatarThunkCreator: (image: any) => void
    sendInfoThunkCreator: (info: any) => void
}
type OwnPropsType = {}
type RouteComponentPropsParams = { userId?: string | undefined }
export type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType & RouteComponentProps<RouteComponentPropsParams>

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount(){
        let routerUserId = this.props.match.params.userId;
        let userId: number = Number(routerUserId)
        if (!userId) { 
            userId = this.props.id;
        }
        this.props.getUserProfileThunkCreator(userId);
        this.props.getUserStatusThunkCreator(userId);
    }
    render(){
        let routerUserId = this.props.match.params.userId;
        let userId: number | null
        (typeof routerUserId === 'string') ? userId = Number(routerUserId) : userId = null
        if (!userId) { 
            userId = this.props.id;
        }
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Profile 
                    { ...this.props }
                    userId={userId}
                    myId={this.props.id}
                />
            </>
        )
    }
}

let mapStateToProps = (state: globalStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        id: state.auth.id,
        isAuth: state.auth.isAuth,
        isFetching: state.profilePage.isFetching
    }
}

let actionCreators = {getUserProfileThunkCreator, getUserStatusThunkCreator, changeUserStatusThunkCreator, sendAvatarThunkCreator, sendInfoThunkCreator}

export default compose(
    withRouter, 
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, globalStateType>(mapStateToProps, actionCreators), 
    withAuthRedirect)
    (ProfileContainer)