import { combineReducers, createStore } from "redux";



export const NAME_ACTION__INPUT = 'name/input'

export type ReduxAction = {
    type: typeof NAME_ACTION__INPUT,
    name: string,
    lastName: string,
}

const initState = {
    name: '',
    lastName: '',
}

export function nameReducer(state = initState,  action: ReduxAction ) {
    switch (action?.type) {
        case NAME_ACTION__INPUT:
        return  {
            name: action.name,
            lastName: action.lastName,
        }
        default:
            return state;
    }
}

