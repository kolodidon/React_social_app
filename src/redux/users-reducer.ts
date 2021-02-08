import { ThunkAction } from 'redux-thunk'
import { usersAPI } from '../api/api'
import { PhotosType } from './profile-reducer'
import { globalStateType, InferActionTypes } from './redux-store'

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: PhotosType
    status: string | null
    followed: boolean
}
type initialStateType = typeof initialState
type thunkType = ThunkAction<Promise<void>, globalStateType, unknown, actionsTypes>
type actionsTypes = InferActionTypes<typeof actions>

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 21,
    totalUsersCount: 0,
    currentPage: 1,
    portionSize: 10,
    isFetching: false,
    followingInProgress: [] as Array<number>
}

const usersReducer = (state = initialState, action: actionsTypes): initialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    } else {
                        return u
                    }
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    } else {
                        return u
                    }
                })
            }
        case 'SET_USERS':
            return {
                ...state,
                users: action.users
            }
        case 'SET_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'SET_TOTAL_USERS_COUNT':
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const actions = {
    follow: (userID: number) => ({ type: 'FOLLOW', userID } as const),
    unfollow: (userID: number) => ({ type: 'UNFOLLOW', userID } as const),
    setUsers: (users: Array<UserType>) => ({ type: 'SET_USERS', users } as const),
    setPage: (currentPage: number) => ({ type: 'SET_PAGE', currentPage } as const),
    setTotalUsersCount: (totalUsersCount: number) => ({ type: 'SET_TOTAL_USERS_COUNT', totalUsersCount } as const),
    toggleIsFetching: (isFetching: boolean) => ({ type: 'TOGGLE_IS_FETCHING', isFetching } as const),
    toggleFollowingProgress: (followingInProgress: Boolean, userId: number) => ({ type: 'TOGGLE_IS_FOLLOWING_PROGRESS', followingInProgress, userId } as const)
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number): thunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleIsFetching(true))
        let responce = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(actions.setTotalUsersCount(responce.totalCount))
        dispatch(actions.toggleIsFetching(false))
        dispatch(actions.setUsers(responce.items))
        dispatch(actions.setPage(currentPage))
    }
}
export const followThunkCreator = (userId: number): thunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleFollowingProgress(true, userId))
        let responce = await usersAPI.followUser(userId)
        dispatch(actions.toggleFollowingProgress(false, userId))
        if (responce.resultCode === 0) {
            dispatch(actions.follow(userId))
        }
    }
}
export const unfollowThunkCreator = (userId: number): thunkType => async (dispatch) => {
    dispatch(actions.toggleFollowingProgress(true, userId))
    let responce = await usersAPI.unfollowUser(userId)
    dispatch(actions.toggleFollowingProgress(false, userId))
    if (responce.resultCode === 0) {
        dispatch(actions.unfollow(userId))
    }
}

export default usersReducer