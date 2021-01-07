import { usersAPI } from '../api/api'

const SET_USER_DATA = 'SET-USER-DATA'
const SET_ERROR_MESSAGE = 'SET-ERROR-MESSAGE'
const SET_CAPTCHA_URL = 'SET-CAPTCHA-URL'

let initialState = {
    id: null,
    login: null,
    email: null,
    captchaUrl: '',
    isAuth: false,
    isFetching: false,
    errorMessage: ''
};

const authReducer = (state = initialState, action) => {
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

export const setAuthUserData = (id, login, email, isAuth) => ({type: SET_USER_DATA, data: {id, login, email, isAuth} })
export const setErrorMessage = (errorMessage) => ({type: SET_ERROR_MESSAGE, errorMessage})
export const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_URL, captchaUrl})

export const authUserThunkCreator = () => (dispatch) => {
    return usersAPI.authUser()
    .then(responce => {
        if(responce.resultCode === 0) {
            let {id, login, email} = responce.data
            dispatch(setAuthUserData(id, login, email, true))
        }
    }) 
}
export const loginUserThunkCreator = (email, password, rememberMe, captcha) => (dispatch) => {
    usersAPI.loginUser(email, password, rememberMe, captcha)
    .then(responce => {
        if (responce.resultCode === 1) {
            dispatch(setErrorMessage(responce.messages))
        } else if (responce.resultCode === 10) {
            dispatch(setErrorMessage(responce.messages))
            usersAPI.getCaptcha()
            .then(responce => {
                dispatch(setCaptchaUrl(responce.url))
            })
        } else if (responce.resultCode === 0) {
            dispatch(setErrorMessage("Logged Successful!"))
            dispatch(authUserThunkCreator())
        }
    })
}
export const logoutUserThunkCreator = () => (dispatch) => {
    usersAPI.logoutUser()
    .then(responce => {
        if(responce.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
            dispatch(setErrorMessage(""))
        }
    })
}

export default authReducer