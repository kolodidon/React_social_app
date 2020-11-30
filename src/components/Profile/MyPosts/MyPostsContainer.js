import React from 'react';
import {addPostActionCreator, catchPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState()
    let postData = state.profilePage.postData
    let newPostText = state.profilePage.newPostText

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = catchPostTextActionCreator(text);
        props.store.dispatch(action)
    }

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            postData={postData}
            newPostText={newPostText}
        />
    )
}

export default MyPostsContainer