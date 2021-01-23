import {authUserThunkCreator} from './auth-reducer'

const SET_INITIALIZED: string = 'SET-INITIALIZED'

export type initialStateType = {
    initialized: boolean
}

let initialState: initialStateType = {
    initialized: false
};

const appReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

type setInitializeActionType = { type: typeof SET_INITIALIZED } 
export const setInitialized = (): setInitializeActionType => ({type: SET_INITIALIZED})

export const initialize = () => (dispatch: any) => {
    let promise = dispatch(authUserThunkCreator());
    Promise.all([promise])
        .then (() => {
            dispatch(setInitialized())
        })
}

export default appReducer