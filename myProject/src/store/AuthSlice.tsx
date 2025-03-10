import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

type AuthStateType = {
  userName: string | null;
  userEmail: string | null;
  status: string;
  error: string | null;
}

const initialState: AuthStateType = {
  userName: null,
  userEmail: null,
  status: '',
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{ userName: string; userEmail: string }>) {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.status = 'succeeded';
    },
    clearUser(state) {
      state.userName = null;
      state.userEmail = null;
      state.status = 'idle';
    }
  }
})

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
