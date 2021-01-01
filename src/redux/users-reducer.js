import { usersAPI } from '../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_PAGE = 'SET_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {
    users: [],
    pageSize: 14,
    totalUsersCount: 400,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
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

export const follow = (userID) => ({ type: FOLLOW, userID })
export const unfollow = (userID) => ({ type: UNFOLLOW, userID })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setPage = (currentPage) => ({ type: SET_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (followingInProgress, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId })

export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize)
    .then(responce => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(responce.items))
        dispatch(setPage(currentPage))
    })
}
export const followThunkCreator = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.followUser(userId)
    .then(responce => {
        dispatch(toggleFollowingProgress(false, userId))
        if (responce.resultCode === 0) {
            dispatch(follow(userId))
        }
    })
}

export const unfollowThunkCreator = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.unfollowUser(userId)
    .then(responce => {
        dispatch(toggleFollowingProgress(false, userId))
        if (responce.resultCode === 0) {
            dispatch(unfollow(userId))
        }
    })
}

export default usersReducer