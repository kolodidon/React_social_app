import React from 'react';
import Profile from './Profile'
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
import {getUserProfileThunkCreator, getUserStatusThunkCreator, changeUserStatusThunkCreator, setUserStatus} from '../../redux/profile-reducer'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import { compose } from 'redux';
import Preloader from '../common/Preloader/Preloader';

class ProfileContainer extends React.Component {

    componentDidMount(){
        let userId = this.props.match.params.userId;
        if (!userId) { 
            userId = this.props.id;
        }
        this.props.getUserProfileThunkCreator(userId);
        this.props.getUserStatusThunkCreator(userId);
    }
    render(){
        let userId = this.props.match.params.userId;
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

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        id: state.auth.id
    }
}

let actionCreators = {getUserProfileThunkCreator, getUserStatusThunkCreator, changeUserStatusThunkCreator, setUserStatus}

export default compose(withRouter, connect(mapStateToProps, actionCreators), withAuthRedirect)(ProfileContainer)