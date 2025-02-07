import { combineReducers, createStore } from "redux";

const initState = {
    message:'',
}

type ReduxAction = {
    type: 'add' | 'update' | 'delete', 
    message: string,
}

export function messageReducer(state = initState,  action: ReduxAction ) {
    switch (action?.type) {
        case 'add':
        return  {
            message: action.message,
        }
        case 'update':
        return  {
            message: action.message,
        }
        case 'delete':
        return  {
            message: '',
        }
        default: 
        return state;
    }
}
