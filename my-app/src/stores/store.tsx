import { configureStore } from '@reduxjs/toolkit';
import { notesSlice } from '../notesSlice';
import { todoSlice } from '../todosSlice';


export const actions = {
    notesSlice: notesSlice.actions,
    todoSlice: todoSlice.actions,
}


export const store = configureStore({
    reducer: {
        notesSlice: notesSlice.reducer,
        todoSlice: todoSlice.reducer,
  }
});

