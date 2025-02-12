import { configureStore } from '@reduxjs/toolkit';
import { componentsSlice } from '../slices/componentsSlice';


export const actions = {
    componentsSlice: componentsSlice.actions,
}


const store = configureStore({
  reducer: {
    componentsSlice: componentsSlice.reducer,
  },
});

export default store;







