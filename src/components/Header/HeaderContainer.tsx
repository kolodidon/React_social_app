import React from 'react';
import {connect} from "react-redux";
import {logoutUserThunkCreator} from '../../redux/auth-reducer'
import { globalStateType } from '../../redux/redux-store';
import Header from "./Header";

type mapStateToPropsType = {
    login: string | null
    email: string | null
    isFetching: boolean
    isAuth: boolean
}
type mapDispatchToPropsType = { logoutUserThunkCreator: () => void }
type ownPropsType = {}
type propsType = mapStateToPropsType & mapDispatchToPropsType & ownPropsType

class HeaderContainer extends React.Component<propsType> {

    render(){
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state: globalStateType): mapStateToPropsType => {
    return {
        login: state.auth.login,
        email: state.auth.email,
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth
    }
}
let actionCreators = {logoutUserThunkCreator}

export default connect<mapStateToPropsType, mapDispatchToPropsType, ownPropsType, globalStateType>(mapStateToProps, actionCreators)(HeaderContainer);