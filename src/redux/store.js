import Ava from '../assets/Ava.png'
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);
    }
}

export default store;