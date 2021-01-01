import React from 'react';
import {connect} from "react-redux";
import {authUserThunkCreator} from '../../redux/auth-reducer'
import Header from "./Header";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authUserThunkCreator()
    }
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
let actionCreators = {authUserThunkCreator}

export default connect(mapStateToProps, actionCreators)(HeaderContainer);