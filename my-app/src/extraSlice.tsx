import { createSlice } from "@reduxjs/toolkit"


export const initialState = {
    count: 0,
}

export const extraSlice = createSlice( {
    name: 'extra',
    initialState,
    reducers: {
        incrementCounter(state) {
            state.count+=1
        }
    }
})

export const {  incrementCounter } = extraSlice.actions;