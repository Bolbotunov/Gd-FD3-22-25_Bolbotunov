import { combineReducers, createStore } from "redux";
import { messageReducer } from "./messageReducer";
import { nameReducer } from "./nameReducer";
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import numberReducer from "./numberReducer";

const combined = combineReducers({
    messageState: messageReducer,
    nameState: nameReducer,
    numberState: numberReducer,
})
export const store = createStore<any, any>(combined)
export type ReduxStore = ReturnType<typeof combined>


export const useTypeSelector: TypedUseSelectorHook<ReduxStore> = useSelector;