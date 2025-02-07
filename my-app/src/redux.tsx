import { combineReducers, createStore } from "redux";

const initState = {
    message:'',
}

type ReduxAction = {
    type: 'add' | 'update' | 'delete', 
    message: string,
}

function myReducer(state = initState,  action: ReduxAction ) {
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


export const store = createStore<any, any>(myReducer)


store.subscribe(() => console.log(`store:` , store.getState()))