import { profileAPI } from '../api/api'

const ADD_POST = 'ADD-POST'
const CATCH_POST_TEXT = 'CATCH-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'CHANGE-STATUS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    postData: [
        {id: 1, message: 'Whassaup homie!', likesCounter: 25},
        {id: 2, message: 'Hawaya doin here?', likesCounter: 10},
        {id: 3, message: 'Exdee git rect', likesCounter: 6}
    ],
    profile: null,
    newPostText: '',
    status: '',
    isFetching: false
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            return {
                ...state,
                newPostText: '',
                postData: [...state.postData, { id: 4, message: state.newPostText, likesCounter: 0 }]
            }
        }
        case CATCH_POST_TEXT: {
            return {
                ...state,
                newPostText: action.typedPost
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.typedStatus
            }
        }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const catchPostTextActionCreator = (text) => ({type: CATCH_POST_TEXT, typedPost: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (typedStatus) => ({type: SET_STATUS, typedStatus})
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })


export const getUserProfileThunkCreator = (userId) => (dispatch) => {
    profileAPI.getUserProfile(userId).then(responce => {
        dispatch(setUserProfile(responce));
    })
}
export const getUserStatusThunkCreator = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
    .then(responce => {
        dispatch(setUserStatus(responce))
    })
}
export const changeUserStatusThunkCreator = (statusText) => (dispatch) => {
    profileAPI.changeStatus(statusText)
        .then(responce => {
            if (responce.resultCode === 0) {
                dispatch(setUserStatus(statusText))
            }
        })
}
export default profileReducer