import { ThunkAction } from 'redux-thunk'
import {authUserThunkCreator} from './auth-reducer'
import { globalStateType, InferActionTypes } from './redux-store'

export type initialStateType = {
    initialized: boolean
}
type actionTypes = InferActionTypes<typeof actions>
type thunkType = ThunkAction<void, globalStateType, unknown, actionTypes>

let initialState: initialStateType = {
    initialized: false
};

const appReducer = (state = initialState, action: actionTypes): initialStateType => {
    switch (action.type) {
        case 'SET_INITIALIZED':
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

const actions = {
    setInitialized: () => ({type: 'SET_INITIALIZED'} as const)
}

export const initialize = (): thunkType => { 
    return (dispatch) => {
        let promise = dispatch(authUserThunkCreator());
        Promise.all([promise])
            .then (() => {
                dispatch(actions.setInitialized())
            })
    }
}

export default appReducer