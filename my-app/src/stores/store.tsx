import { configureStore } from '@reduxjs/toolkit';
import { notesSlice } from '../notesSlice';
import { todoSlice } from '../todosSlice';
import postSlice from './postSlice';
import { TypedUseSelectorHook, useSelector } from "react-redux";


export const actions = {
    notesSlice: notesSlice.actions,
    todoSlice: todoSlice.actions,
    postSlice: postSlice.actions,
}


export const store = configureStore({
    reducer: {
        notesSlice: notesSlice.reducer,
        todoSlice: todoSlice.reducer,
        postSlice:postSlice.reducer,
  }
});


export type ReduxStore = ReturnType<typeof store.getState>;

export const useTypedSelector: TypedUseSelectorHook<ReduxStore> = useSelector;