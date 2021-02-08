import React from 'react'
import s from './login.module.scss'
import { loginUserThunkCreator } from "../../redux/auth-reducer"
import { globalStateType } from "../../redux/redux-store"
import {connect} from "react-redux"
import { Redirect } from 'react-router-dom'
import LoginForm from './loginForm'

type MapStatePropsType = {
    errorMessage: string | null
    captchaUrl: string | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    loginUserThunkCreator: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}
type OwnPropsType = {}
type LoginPropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const Login: React.FC<LoginPropsType> = (props) => {
    if (props.isAuth) {
        return <Redirect to ={"/profile"}/>
    } else {
        return (
            <div className={s.loginWrapper}>
                <h1>You need to login first:</h1>
                <LoginForm 
                    loginUserThunkCreator={props.loginUserThunkCreator} 
                    errorMessage={props.errorMessage}
                    captchaUrl={props.captchaUrl}
                />
            </div>
        )
    }
}

let mapStateToProps = (state: globalStateType): MapStatePropsType => {
    return {
        errorMessage: state.auth.errorMessage,
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth
    }
}

let actionCreators = {loginUserThunkCreator}

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, globalStateType>(mapStateToProps, actionCreators)(Login)

