import { configureStore } from '@reduxjs/toolkit';
import { componentsSlice } from '../slices/componentsSlice';
import { tagsSlice } from '../slices/tagsSlice';


export const actions = {
    componentsSlice: componentsSlice.actions,
}


const store = configureStore({
  reducer: {
    componentsSlice: componentsSlice.reducer,
    tagsSlice: tagsSlice.reducer,
  },
});

export default store;







