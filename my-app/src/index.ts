import { configureStore } from '@reduxjs/toolkit';
import messageSlice from './messageSlice';
import numberSlice from './numberSlice';
import todosSlice from './todosSlice';
import { TypedUseSelectorHook, useSelector } from "react-redux";


export const actions = {
    todosSlice: todosSlice.actions,
    messageSlice: messageSlice.actions,
    numberSlice: numberSlice.actions,
}

export const store = configureStore({
    reducer: {
        todosSlice: todosSlice.reducer,
        messageSlice: messageSlice.reducer,
        numberState: numberSlice.reducer,
    }
});

export type ReduxStore = ReturnType<typeof store.getState>
export const useTypeSelector: TypedUseSelectorHook<ReduxStore> = useSelector;
