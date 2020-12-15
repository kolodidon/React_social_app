const ADD_POST = 'ADD-POST'
const CATCH_POST_TEXT = 'CATCH-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
    postData: [
        {id: 1, message: 'Whassaup homie!', likesCounter: 25},
        {id: 2, message: 'Hawaya doin here?', likesCounter: 10},
        {id: 3, message: 'Exdee git rect', likesCounter: 6}
    ],
    profile: null,
    newPostText: ''
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
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})    //такая запись означает "return{type: ADD_POST}"
export const catchPostTextActionCreator = (text) => ({type: CATCH_POST_TEXT, typedPost: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer