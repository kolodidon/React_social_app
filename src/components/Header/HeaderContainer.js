import React from 'react';
import {connect} from "react-redux";
import usersAPI from '../../api/api';
import {setAuthUserData} from '../../redux/auth-reducer'
import Header from "./Header";

class HeaderContainer extends React.Component {
    componentDidMount() {
        usersAPI.authUser()
            .then(responce => {
                if(responce.resultCode === 0) {
                    this.props.setAuthUserData(responce.data)
                }
            })    
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
let actionCreators = {setAuthUserData}

export default connect(mapStateToProps, actionCreators)(HeaderContainer);