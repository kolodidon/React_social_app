import Ava from "../assets/Ava.png";

const ADD_MESSAGE = 'ADD-MESSAGE'
const CATCH_MESSAGE_TEXT = 'CATCH-MESSAGE-TEXT'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                text: state.newMessageText
            };
            state.messageData.push(newMessage);
            state.newMessageText = '';
            return state;

        case CATCH_MESSAGE_TEXT:
            state.newMessageText = action.typedMessage;
            return state;

        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const catchMessageTextActionCreator = (text) => ({type: CATCH_MESSAGE_TEXT, typedMessage: text})

export default dialogsReducer