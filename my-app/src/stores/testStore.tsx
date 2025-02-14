import { configureStore } from '@reduxjs/toolkit';
import { TestSlice } from '../TestSlice';

export const actions = {
    TestSlice: TestSlice.actions,
}


export const testStore = configureStore( {
    reducer: {
        TestSlice: TestSlice.reducer,
    }
})
