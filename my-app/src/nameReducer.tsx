import { combineReducers, createStore } from "redux";

const initState = {
    name: '',
    lastName: '',
}

type ReduxAction = {
    type: 'input', 
    name: string,
    lastName: string,
}

export function nameReducer(state = initState,  action: ReduxAction ) {
    switch (action?.type) {
        case 'input':
        return  {
            name: action.name,
            lastName: action.lastName,
        }
        default:
            return state;
    }
}

