const ADD_MESSAGE = 'ADD-MESSAGE'
const CATCH_MESSAGE_TEXT = 'CATCH-MESSAGE-TEXT'

const dialogsReducer = (state, action) => {
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