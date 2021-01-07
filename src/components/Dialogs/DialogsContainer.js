import {addMessageActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from './Dialogs'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import { compose } from "redux";



let mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
        messageData: state.messagesPage.messageData,
        contactData: state.messagesPage.contactData,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: (text) => {
            dispatch(addMessageActionCreator(text));
        }
    }
}

export default compose( connect(mapStateToProps, mapDispatchToProps), withAuthRedirect )(Dialogs)