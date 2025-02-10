import  messageReducer  from "./messageSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux"
import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "./messageSlice";
import todosSlice from "./todosSlice";

export const actions = {
    todosSlice: todosSlice.actions,
    messageSlice: messageSlice.actions,
}

export const store = configureStore({
    reducer: {
        todosSlice: todosSlice.reducer,
        messageSlice: messageSlice.reducer,
    }
})
export type ReduxStore = ReturnType<typeof store.getState>

export const useTypeSelector: TypedUseSelectorHook<ReduxStore> = useSelector;



