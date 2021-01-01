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
            userId = 13254;
        }
        this.props.getUserProfileThunkCreator(userId);
        this.props.getUserStatusThunkCreator(userId);
    }
    componentDidUpdate(){
        let userId = this.props.match.params.userId;
        if (!userId) { 
            userId = 13254;
        }
    }
    render(){
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Profile 
                    { ...this.props }
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}

let actionCreators = {getUserProfileThunkCreator, getUserStatusThunkCreator, changeUserStatusThunkCreator, setUserStatus}

export default compose(withRouter, connect(mapStateToProps, actionCreators), withAuthRedirect)(ProfileContainer)