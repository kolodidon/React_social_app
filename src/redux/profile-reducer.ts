import { profileAPI } from '../api/api'
import { ThunkAction } from 'redux-thunk'
import { globalStateType, InferActionTypes } from './redux-store'

//Types
export type ContactsType = {
    facebook: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
    website: string
    [key: string]: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos?: PhotosType
    aboutMe?: string
}
export type PostDataItemType = {
    id: number, message: string, likesCounter: number
}
export type initialStateType = typeof initialState
type actionsTypes = InferActionTypes<typeof actions>
type thunkType = ThunkAction<Promise<void>, globalStateType, unknown, actionsTypes>
//InitialState
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
//Reducer
const profileReducer = (state = initialState, action: actionsTypes): initialStateType => {
    switch (action.type) {
        case 'ADD_POST': {
            return {
                ...state,
                postData: [...state.postData, { id: 4, message: action.postText, likesCounter: 0 }]
            }
        }
        case 'DELETE_POST': {
            return {
                ...state,
                postData: [...state.postData.filter(p => p.id !== action.postId)]
            }
        }
        case 'SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        case 'SET_STATUS': {
            return {
                ...state,
                status: action.typedStatus,
            }
        }
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'UPDATE_AVATAR':
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos } as ProfileType
            }
        case 'UPDATE_INFO':
            return {
                ...state,
                profile: {
                    ...state.profile,
                    ...action.info,
                    contacts: { ...action.info.contacts }
                } as ProfileType
            }
        default:
            return state;
    }
}
//Actions
export const actions = {
    addPostActionCreator: (postText: string) => ({ type: 'ADD_POST', postText } as const),
    deletePostActionCreator: (postId: number) => ({ type: 'DELETE_POST', postId } as const),
    setUserProfile: (profile: ProfileType) => ({ type: 'SET_USER_PROFILE', profile } as const),
    setUserStatus: (typedStatus: string) => ({ type: 'SET_STATUS', typedStatus } as const),
    toggleIsFetching: (isFetching: boolean) => ({ type: 'TOGGLE_IS_FETCHING', isFetching } as const),
    updateAvatar: (photos: PhotosType) => ({ type: 'UPDATE_AVATAR', photos } as const),
    updateInfo: (info: any) => ({ type: 'UPDATE_INFO', info } as const)
}
//Thunks
export const getUserProfileThunkCreator = (userId: number): thunkType => async (dispatch) => {
    let responce = await profileAPI.getUserProfile(userId)
    dispatch(actions.setUserProfile(responce));
}
export const getUserStatusThunkCreator = (userId: number): thunkType => async (dispatch) => {
    let responce = await profileAPI.getStatus(userId)
    dispatch(actions.setUserStatus(responce))
}
export const changeUserStatusThunkCreator = (statusText: string): thunkType => async (dispatch) => {
    let responce = await profileAPI.changeStatus(statusText)

    if (responce.resultCode === 0) {
        dispatch(actions.setUserStatus(statusText))
    }
}
export const sendAvatarThunkCreator = (image: any): thunkType => async (dispatch) => {
    try {
        let responce = await profileAPI.sendAvatar(image)
        if (responce.data.resultCode === 0) {
            dispatch(actions.updateAvatar(responce.data.data.photos))
        }
    }
    catch (error) {
        console.log(`Shit is wrong man, here is your error message: ${error}`)
    }
}
export const sendInfoThunkCreator = (info: ProfileType): thunkType => async (dispatch) => {
    let responce = await profileAPI.sendInfo(info)
    if (responce.data.resultCode === 0) {
        dispatch(actions.updateInfo(info))
    }
}

export default profileReducer