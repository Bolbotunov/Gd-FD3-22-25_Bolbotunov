import { configureStore } from '@reduxjs/toolkit';
import messageSlice from './messageSlice';
import numberReducer from './numberSlice';
import todosSlice from './todosSlice';
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { increment, decrement } from './numberSlice';


export const actions = {
    todosSlice: todosSlice.actions,
    messageSlice: messageSlice.actions,
    numberSlice: { increment, decrement },
}

export const store = configureStore({
    reducer: {
        todosSlice: todosSlice.reducer,
        messageSlice: messageSlice.reducer,
        numberState: numberReducer,
    }
});

export type ReduxStore = ReturnType<typeof store.getState>
export const useTypeSelector: TypedUseSelectorHook<ReduxStore> = useSelector;