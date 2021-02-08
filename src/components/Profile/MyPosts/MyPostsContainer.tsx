import React from 'react'
import {actions, PostDataItemType} from "../../../redux/profile-reducer"
import {connect} from "react-redux"
import { globalStateType } from "../../../redux/redux-store"
import Post from "./Post/Post"
import PostForm from './PostForm'
import Ava from "../../../assets/Ava.png"
import s from './MyPosts.module.scss'

type MapStatePropsType = {
    postData: Array<PostDataItemType>
}
type MapDispatchPropsType = {
    addPost: (postText: string) => void
}
type OwnPropsType = {} 
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const MyPosts: React.FC<PropsType> = React.memo(props => {
    let postElements = props.postData.map(post => <Post key={post.id} id={post.id} avatar={Ava} message={post.message} likesCounter={post.likesCounter} />)
    return (
        <div className={s.posts}>
            <h2>My Posts</h2>

            <PostForm addPost={props.addPost} />

            <div className={s.postList}>
                {postElements}
            </div>
        </div>
    )
})

let mapStateToProps = (state: globalStateType) => {
    return {
        postData: state.profilePage.postData,
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (postText: string) => {
            dispatch(actions.addPostActionCreator(postText));
        }
    }
}
const MyPostsContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, globalStateType>(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer