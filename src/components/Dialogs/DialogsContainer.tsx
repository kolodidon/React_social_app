import {actions} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from './Dialogs'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import { compose } from "redux";
import { globalStateType } from "../../redux/redux-store";

type MapStatePropsType = {
    messageData: Array<{id: number, text: string}>
    contactData: Array<{id: number, name: string, avatar: any}>
}
type MapDispatchPropsType = {
    onAddMessage: (text: string) => void
}
type OwnPropsType = {}
let mapStateToProps = (state: globalStateType) => {
    return {
        messageData: state.messagesPage.messageData,
        contactData: state.messagesPage.contactData,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        onAddMessage: (text: string) => {
            dispatch(actions.addMessageActionCreator(text));
        }
    }
}

export default compose( 
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, globalStateType>(mapStateToProps, mapDispatchToProps), 
    withAuthRedirect 
    )(Dialogs)