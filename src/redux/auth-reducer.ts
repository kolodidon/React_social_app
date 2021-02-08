import { ResponceCodeForCaptcha, ResponceCodes, usersAPI } from '../api/api'
import { ThunkAction } from 'redux-thunk'
import { globalStateType, InferActionTypes } from './redux-store'

export type initialStateType = {
    id: number
    login: string | null
    email: string | null
    captchaUrl: string | null
    isAuth: boolean
    isFetching: boolean
    errorMessage: string | null
}
type actionTypes = InferActionTypes<typeof actions>
type thunkType = ThunkAction<Promise<void>, globalStateType, unknown, actionTypes>

let initialState: initialStateType = {
    id: 1,
    login: null,
    email: null,
    captchaUrl: '',
    isAuth: false,
    isFetching: false,
    errorMessage: ''
};

const authReducer = (state = initialState, action: actionTypes): initialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data
            }
        case 'SET_ERROR_MESSAGE':
            return {
                ...state,
                errorMessage: action.errorMessage
            }
        case 'SET_CAPTCHA_URL':
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state
    }
}
//Actions
export const actions = {
    setAuthUserData: (id: number, login: string | null, email: string | null, isAuth: boolean) => ({ type: 'SET_USER_DATA', data: { id, login, email, isAuth }} as const),
    setErrorMessage: (errorMessage: string) => ({ type: 'SET_ERROR_MESSAGE', errorMessage } as const),
    setCaptchaUrl: (captchaUrl: string) => ({ type: 'SET_CAPTCHA_URL', captchaUrl } as const)
} 
//Thunks
export const authUserThunkCreator = (): thunkType => {
    return async (dispatch) => {
        let response = await usersAPI.authUser()
        if (response.resultCode === ResponceCodes.Success) {
            let { id, login, email } = response.data
            dispatch(actions.setAuthUserData(id, login, email, true))
        }
    }
}
export const loginUserThunkCreator = (email: string, password: string, rememberMe: boolean, captcha: string): thunkType => {
    return async (dispatch) => {
        let response = await usersAPI.loginUser(email, password, rememberMe, captcha)
        if (response.resultCode === ResponceCodes.Error) {
            dispatch(actions.setErrorMessage(response.messages[0]))
        } else if (response.resultCode === ResponceCodeForCaptcha.NeedCaptcha) {
            dispatch(actions.setErrorMessage(response.messages[0]))
            let captchaResponse = await usersAPI.getCaptcha()
            dispatch(actions.setCaptchaUrl(captchaResponse.url))
        } else if (response.resultCode === ResponceCodes.Success) {
            dispatch(actions.setErrorMessage("Logged Successful!"))
            dispatch(authUserThunkCreator())
        }
    }
}
export const logoutUserThunkCreator = (): thunkType => {
    return async (dispatch) => {
        let response = await usersAPI.logoutUser()
        if (response.data.resultCode === ResponceCodes.Success) {
            dispatch(actions.setAuthUserData(1, null, null, false))
            dispatch(actions.setErrorMessage(""))
        }
    }
}

export default authReducer