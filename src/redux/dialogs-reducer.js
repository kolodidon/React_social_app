import Ava from '../assets/Ava.png'

const ADD_MESSAGE = 'ADD-MESSAGE'

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
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messageData: [...state.messageData, {id: 5, text: action.messageText}]
            }

        default:
            return state;
    }
}

export const addMessageActionCreator = (messageText) => ({type: ADD_MESSAGE, messageText})

export default dialogsReducer