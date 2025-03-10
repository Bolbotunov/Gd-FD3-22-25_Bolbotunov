import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { authSlice } from './AuthSlice';



export const action = {
  authSlice: authSlice.actions,
}


const store = configureStore({
  reducer: {
    authSlice: authSlice.reducer,
  },
});


export type RootState = ReturnType<typeof store.getState>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;

