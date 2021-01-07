import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./profile-reducer"

let action = addPostActionCreator("Тестовый текст для добавления нового поста")
let state = {
    postData: [
        {id: 1, message: 'Whassaup homie!', likesCounter: 25},
        {id: 2, message: 'Hawaya doin here?', likesCounter: 10},
        {id: 3, message: 'Exdee git rect', likesCounter: 6}
    ]
}
it('length of postData should be incremented when post added', () => {
    let newState = profileReducer(state, action)
    expect(newState.postData.length).toBe(4)
})
it('length of postData should be incremented when post deleted', () => {
    let action = deletePostActionCreator(1)
    let newState = profileReducer(state, action)
    expect(newState.postData.length).toBe(2)
})
it('new post should contain proper message', () => {
    let newState = profileReducer(state, action)
    expect(newState.postData[3].message).toBe("Тестовый текст для добавления нового поста")
})