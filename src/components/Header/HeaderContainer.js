import React from 'react';
import axios from 'axios';
import {connect} from "react-redux";
import {setAuthUserData} from '../../redux/auth-reducer'
import Header from "./Header";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get( `https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true} )
            .then(responce => {
                if(responce.data.resultCode === 0) {
                    this.props.setAuthUserData(responce.data.data)
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