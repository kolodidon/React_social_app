import React from 'react';
import Profile from './Profile'
import {setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
import usersAPI from '../../api/api';

class ProfileContainer extends React.Component {
    componentDidMount(){
        let userId = this.props.match.params.userId
        if (!userId) { userId = 13254 }
        usersAPI.getUserProfile(userId).then(responce => {
            this.props.setUserProfile(responce);
        })
    }
    render(){
        return (
            <Profile { ...this.props } profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}
let actionCreators = {setUserProfile}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, actionCreators)(WithUrlDataContainerComponent);
