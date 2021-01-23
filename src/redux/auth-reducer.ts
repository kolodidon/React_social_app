import { usersAPI } from '../api/api'

const SET_USER_DATA: string = 'SET-USER-DATA'
const SET_ERROR_MESSAGE: string = 'SET-ERROR-MESSAGE'
const SET_CAPTCHA_URL: string = 'SET-CAPTCHA-URL'

export type initialStateType = {
    id: number | string | null
    login: string | null
    email: string | null
    captchaUrl: string | null
    isAuth: boolean
    isFetching: boolean
    errorMessage: string | null
}

let initialState: initialStateType = {
    id: null,
    login: null,
    email: null,
    captchaUrl: '',
    isAuth: false,
    isFetching: false,
    errorMessage: ''
};

const authReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.errorMessage
            }
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state
    }
}

type setAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    data: { id: number | null, login: string | null, email: string | null, isAuth: boolean }
}
type setErrorMessageActionType = {
    type: typeof SET_ERROR_MESSAGE
    errorMessage: string
}
type setCaptchaUrlActionType = {
    type: typeof SET_CAPTCHA_URL
    captchaUrl: string
}
export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean): setAuthUserDataActionType => ({ type: SET_USER_DATA, data: { id, login, email, isAuth } })
export const setErrorMessage = (errorMessage: string): setErrorMessageActionType => ({ type: SET_ERROR_MESSAGE, errorMessage })
export const setCaptchaUrl = (captchaUrl: string): setCaptchaUrlActionType => ({ type: SET_CAPTCHA_URL, captchaUrl })

export const authUserThunkCreator = () => async (dispatch: any) => {
    let response = await usersAPI.authUser()
    if (response.resultCode === 0) {
        let { id, login, email } = response.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}
export const loginUserThunkCreator = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    let response = await usersAPI.loginUser(email, password, rememberMe, captcha)
    if (response.resultCode === 1) {
        dispatch(setErrorMessage(response.messages))
    } else if (response.resultCode === 10) {
        dispatch(setErrorMessage(response.messages))
        let captchaResponse = await usersAPI.getCaptcha()
        dispatch(setCaptchaUrl(captchaResponse.url))
    } else if (response.resultCode === 0) {
        dispatch(setErrorMessage("Logged Successful!"))
        dispatch(authUserThunkCreator())
    }
}
export const logoutUserThunkCreator = () => async (dispatch: any) => {
    let response = await usersAPI.logoutUser()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
        dispatch(setErrorMessage(""))
    }

}

export default authReducer