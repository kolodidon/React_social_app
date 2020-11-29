const ADD_POST = 'ADD-POST'
const CATCH_POST_TEXT = 'CATCH-POST-TEXT'

const profileReducer = (state, action) => {

    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCounter: 0
            };
            state.postData.push(newPost);
            state.newPostText = '';
            return state;

        case CATCH_POST_TEXT:
            state.newPostText = action.typedPost;
            return state;

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})    //такая запись означает "return{type: ADD_POST}"
export const catchPostTextActionCreator = (text) => ({type: CATCH_POST_TEXT, typedPost: text})

export default profileReducer