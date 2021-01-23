import { profileAPI } from '../api/api'

const ADD_POST: string = 'ADD-POST'
const DELETE_POST: string = 'DELETE-POST'
const SET_USER_PROFILE: string = 'SET-USER-PROFILE'
const SET_STATUS: string = 'CHANGE-STATUS'
const TOGGLE_IS_FETCHING: string = 'TOGGLE_IS_FETCHING'
const UPDATE_AVATAR: string = 'UPDATE_AVATAR'
const UPDATE_INFO: string = 'UPDATE_INFO'
type ContactsType = {
    facebook: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
    website: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}
type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos?: PhotosType
    aboutMe?: string
}
type PostDataItemType = {
    id: number, message: string, likesCounter: number
}
let initialState = {
    postData: [
        { id: 1, message: 'Whassaup homie!', likesCounter: 25 },
        { id: 2, message: 'Hawaya doin here?', likesCounter: 10 },
        { id: 3, message: 'Exdee git rect', likesCounter: 6 }
    ] as Array<PostDataItemType>,
    profile: null as ProfileType | null,
    status: '',
    isFetching: false
}
export type initialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {
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
                status: action.typedStatus,
            }
        }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case UPDATE_AVATAR:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos } as ProfileType
            }
        case UPDATE_INFO:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    userId: action.info.userId,
                    aboutMe: action.info.aboutMe,
                    lookingForAJob: action.info.lookingForAJob,
                    lookingForAJobDescription: action.info.lookingForAJobDescription,
                    fullName: action.info.fullName,
                    contacts: {
                        facebook: action.info.facebook,
                        website: action.info.website,
                        vk: action.info.vk,
                        twitter: action.info.twitter,
                        instagram: action.info.instagram,
                        youtube: action.info.youtube,
                        github: action.info.github,
                        mainLink: action.info.mainLink
                    }
                } as ProfileType
            }
        default:
            return state;
    }
}

type addPostActionType = { type: typeof ADD_POST, postText: string }
export const addPostActionCreator = (postText: string): addPostActionType => ({ type: ADD_POST, postText })

type deletePostActionType = { type: typeof DELETE_POST, postId: number }
export const deletePostActionCreator = (postId: number): deletePostActionType => ({ type: DELETE_POST, postId })

type setUserProfileActionType = { type: typeof SET_USER_PROFILE, profile: ProfileType }
export const setUserProfile = (profile: ProfileType): setUserProfileActionType => ({ type: SET_USER_PROFILE, profile })

type setUserStatusActionType = { type: typeof SET_STATUS, typedStatus: string }
export const setUserStatus = (typedStatus: string): setUserStatusActionType => ({ type: SET_STATUS, typedStatus })

type toggleIsFetchingActionType = { type: typeof TOGGLE_IS_FETCHING, isFetching: boolean }
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching })

type updateAvatarActionType = { type: typeof UPDATE_AVATAR, photos: PhotosType }
export const updateAvatar = (photos: PhotosType): updateAvatarActionType => ({ type: UPDATE_AVATAR, photos })

type updateInfoActionType = { type: typeof UPDATE_INFO, info: any }
export const updateInfo = (info: any): updateInfoActionType => ({ type: UPDATE_INFO, info })


export const getUserProfileThunkCreator = (userId: number) => async (dispatch: any) => {
    let responce = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(responce));
}
export const getUserStatusThunkCreator = (userId: number) => async (dispatch: any) => {
    let responce = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(responce))
}
export const changeUserStatusThunkCreator = (statusText: string) => async (dispatch: any) => {
    let responce = await profileAPI.changeStatus(statusText)

    if (responce.resultCode === 0) {
        dispatch(setUserStatus(statusText))
    }
}
export const sendAvatarThunkCreator = (image: any) => async (dispatch: any) => {
    try {
        let responce = await profileAPI.sendAvatar(image)
        if (responce.resultCode === 0) {
            dispatch(updateAvatar(responce.data.data.photos))
        }
    }
    catch (error) {
        console.log(`Shit is wrong man, here is your error message: ${error}`)
    }
}
export const sendInfoThunkCreator = (info: any) => async (dispatch: any) => {
    let responce = await profileAPI.sendInfo(info)
    if (responce.data.resultCode === 0) {
        dispatch(updateInfo(info))
    }

}
export default profileReducer