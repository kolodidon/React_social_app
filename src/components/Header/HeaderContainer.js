import React from 'react';
import {connect} from "react-redux";
import {logoutUserThunkCreator} from '../../redux/auth-reducer'
import Header from "./Header";

class HeaderContainer extends React.Component {

    render(){
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        email: state.auth.email,
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth
    }
}
let actionCreators = {logoutUserThunkCreator}

export default connect(mapStateToProps, actionCreators)(HeaderContainer);