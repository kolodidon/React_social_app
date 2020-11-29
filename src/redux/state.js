import Ava from '../assets/Ava.png'

const ADD_POST = 'ADD-POST'
const ADD_MESSAGE = 'ADD-MESSAGE'

const CATCH_POST_TEXT = 'CATCH-POST-TEXT'
const CATCH_MESSAGE_TEXT = 'CATCH-MESSAGE-TEXT'

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Whassaup homie!', likesCounter: 25},
                {id: 2, message: 'Hawaya doin here?', likesCounter: 10},
                {id: 3, message: 'Exdee git rect', likesCounter: 6}
            ],
            newPostText: ''
        },
        messagesPage: {
            contactData: [
                {id: 1, name: 'Alex', avatar: Ava},
                {id: 2, name: 'Doodie', avatar: Ava},
                {id: 3, name: 'Moodie', avatar: Ava},
                {id: 4, name: 'John', avatar: Ava},
                {id: 5, name: 'Doe', avatar: Ava}
            ],
            messageData: [
                {id: 1, text: 'Sup homie! How are you doing with ur react stuff? Are u done for today?'},
                {id: 2, text: 'Ain\'t ya doing ur app or smth?'},
                {id: 3, text: 'Wanna drink this evening?'}
            ],
            newMessageText: ''
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Viktor', surname: 'Doodiev', avatar: Ava },
                {id: 2, name: 'Piter', surname: 'Parker', avatar: Ava },
                {id: 3, name: 'Woodie', surname: 'Bamboozle', avatar: Ava },
                {id: 4, name: 'Vlad', surname: 'Goonie', avatar: Ava },
                {id: 5, name: 'Josef', surname: 'Tiki', avatar: Ava }
            ]
        }
    },
    _callSubscriber() {
        console.log('State was changed')
    },

    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){
        switch(action.type) {
            case ADD_POST:
                let newPost = {
                    id: 4,
                    message: this._state.profilePage.newPostText,
                    likesCounter: 0
                };
                this._state.profilePage.postData.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
                break;

            case CATCH_POST_TEXT:
                this._state.profilePage.newPostText = action.typedPost;
                this._callSubscriber(this._state);
                break;

            case ADD_MESSAGE:
                let newMessage = {
                    id: 4,
                    text: this._state.messagesPage.newMessageText
                };
                this._state.messagesPage.messageData.push(newMessage);
                this._state.messagesPage.newMessageText = '';
                this._callSubscriber(this._state);
                break;

            case CATCH_MESSAGE_TEXT:
                this._state.messagesPage.newMessageText = action.typedMessage;
                this._callSubscriber(this._state);
                break;

            default:
                throw new Error('There is no function with such type in dispatcher')
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})    //такая запись означает "return{type: ADD_POST}"
export const catchPostTextActionCreator = (text) => ({type: CATCH_POST_TEXT, typedPost: text})

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const catchMessageTextActionCreator = (text) => ({type: CATCH_MESSAGE_TEXT, typedMessage: text})

export default store;