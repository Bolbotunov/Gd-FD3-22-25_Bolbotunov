import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const ACTION_MINUS = '-';
export const ACTION_PLUS = '+';


const initialState = {
  showCommand: '',
  count: 0,
};

const numberSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
      state.showCommand = ACTION_PLUS;
    },
    decrement(state) {
      state.count -= 1;
      state.showCommand = ACTION_MINUS;
    },
  },
});

export const { increment, decrement } = numberSlice.actions;
export default numberSlice.reducer;