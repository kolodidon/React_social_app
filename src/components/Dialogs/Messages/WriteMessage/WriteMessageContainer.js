import {addMessageActionCreator, catchMessageTextActionCreator} from "../../../../redux/dialogs-reducer";
import WriteMessage from "./WriteMessage";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
        messageData: state.messagesPage.messageData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: () => {
            dispatch(addMessageActionCreator());
        },
        onMessageChange: (text) => {
            dispatch(catchMessageTextActionCreator(text))
        }
    }
}

const WriteMessageContainer = connect(mapStateToProps, mapDispatchToProps)(WriteMessage);

export default WriteMessageContainer