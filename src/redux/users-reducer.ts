import { usersAPI } from '../api/api'
import { PhotosType } from './profile-reducer'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_PAGE = 'SET_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
// const SET_PORTION_SIZE = 'SET_PORTION_SIZE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

type UserType = {
    name: string
    id: number
    photos: PhotosType
    status: string
    followed: boolean
}

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 21,
    totalUsersCount: 0,
    currentPage: 1,
    portionSize: 10,
    isFetching: false,
    followingInProgress: [] as Array<number>
};
type initialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    } else {
                        return u;
                    }
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    } else {
                        return u;
                    }
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        // case SET_PORTION_SIZE:
        //     return {
        //         ...state,
        //         portionSize: action.portionSize
        //     }    
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
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

type followActionType = { type: typeof FOLLOW, userID: number }
export const follow = (userID: number): followActionType => ({ type: FOLLOW, userID })

type unfollowActionType = { type: typeof UNFOLLOW, userID: number }
export const unfollow = (userID: number): unfollowActionType => ({ type: UNFOLLOW, userID })

type setUsersActionType = { type: typeof SET_USERS, users: Array<UserType> }
export const setUsers = (users: Array<UserType>): setUsersActionType => ({ type: SET_USERS, users })

type setPageActionType = { type: typeof SET_PAGE, currentPage: number }
export const setPage = (currentPage: number): setPageActionType => ({ type: SET_PAGE, currentPage })

type setTotalUsersCountActionType = { type: typeof SET_TOTAL_USERS_COUNT, totalUsersCount: number }
export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountActionType => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })

// export const setPortionSize = (portionSize) => ({ type: SET_PORTION_SIZE, portionSize })

type toggleIsFetchingActionType = { type: typeof TOGGLE_IS_FETCHING, isFetching: boolean }
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching })

type toggleFollowingProgressActionType = { type: typeof TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress: Boolean, userId: number }
export const toggleFollowingProgress = (followingInProgress: Boolean, userId: number): toggleFollowingProgressActionType => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId })

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    let responce = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setTotalUsersCount(responce.totalCount))
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(responce.items))
    dispatch(setPage(currentPage))
}
export const followThunkCreator = (userId: number) => async (dispatch: any) => {
    dispatch(toggleFollowingProgress(true, userId))
    let responce = await usersAPI.followUser(userId)
    dispatch(toggleFollowingProgress(false, userId))
    if (responce.resultCode === 0) {
        dispatch(follow(userId))
    }
}

export const unfollowThunkCreator = (userId: number) => async (dispatch: any) => {
    dispatch(toggleFollowingProgress(true, userId))
    let responce = await usersAPI.unfollowUser(userId)
    dispatch(toggleFollowingProgress(false, userId))
    if (responce.resultCode === 0) {
        dispatch(unfollow(userId))
    }
}

export default usersReducer