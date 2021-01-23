import { profileAPI } from '../api/api'

const ADD_POST = 'ADD-POST'
const DELETE_POST = 'DELETE-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'CHANGE-STATUS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const UPDATE_AVATAR = 'UPDATE_AVATAR'
const UPDATE_INFO = 'UPDATE_INFO'

let initialState = {
    postData: [
        {id: 1, message: 'Whassaup homie!', likesCounter: 25},
        {id: 2, message: 'Hawaya doin here?', likesCounter: 10},
        {id: 3, message: 'Exdee git rect', likesCounter: 6}
    ],
    profile: null,
    status: '',
    isFetching: false
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            return {
                ...state,
                postData: [...state.postData, { id: 4, message: action.postText, likesCounter: 0 }]
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                postData: [...state.postData.filter(p => p.id !== action.postId)]
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
        case UPDATE_AVATAR:
            return{
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        case UPDATE_INFO:
            return{
                ...state,
                 profile: {...state.profile, 
                    aboutMe: action.info.aboutMe,
                    lookingForAJob: action.info.lookingForAJob,
                    lookingForAJobDescription: action.info.lookingForAJobDescription,
                    fullName: action.info.fullName,
                    contacts: {...state.profile.contacts,
                        facebook: action.info.facebook,
                        website: action.info.website,
                        vk: action.info.vk,
                        twitter: action.info.twitter,
                        instagram: action.info.instagram,
                        youtube: action.info.youtube,
                        github: action.info.github,
                        mainLink: action.info.mainLink
                    }
                }
            }    
        default:
            return state;
    }
}

export const addPostActionCreator = (postText) => ({type: ADD_POST, postText})
export const deletePostActionCreator = (postId) => ({type: DELETE_POST, postId})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (typedStatus) => ({type: SET_STATUS, typedStatus})
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const updateAvatar = (photos) => ({ type: UPDATE_AVATAR, photos })
export const updateInfo = (info) => ({ type: UPDATE_INFO, info })


export const getUserProfileThunkCreator = (userId) => (dispatch) => {
    profileAPI.getUserProfile(userId).then(responce => {
        dispatch(setUserProfile(responce));
    })
}
export const getUserStatusThunkCreator = (userId) => async (dispatch) => {
    let responce = await profileAPI.getStatus(userId)
        dispatch(setUserStatus(responce))
}
export const changeUserStatusThunkCreator = (statusText) => (dispatch) => {
    profileAPI.changeStatus(statusText)
        .then(responce => {
            if (responce.resultCode === 0) {
                dispatch(setUserStatus(statusText))
            }
        })
}
export const sendAvatarThunkCreator = (image) => async (dispatch) => {
    try{
        let responce = await profileAPI.sendAvatar(image)
        if (responce.resultCode === 0) {
            dispatch(updateAvatar(responce.data.data.photos))
        }
    }
    catch(error){
        console.log(`Shit is wrong man, here is your error message: ${error}`)
    }
}
export const sendInfoThunkCreator = (info) => async (dispatch) => {
    let responce = await profileAPI.sendInfo(info)
    if (responce.data.resultCode === 0) {
        dispatch(updateInfo(info))
    }
    
}
export default profileReducer