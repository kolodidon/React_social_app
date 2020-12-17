import axios from 'axios';
import React from 'react';
import Profile from './Profile'
import {setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount(){
        let userId = this.props.match.params.userId
        if (!userId) { userId = 13254 }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(responce => {
            this.props.setUserProfile(responce.data);
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
