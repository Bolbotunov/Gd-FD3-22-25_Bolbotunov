import { createSlice } from "@reduxjs/toolkit"
import { CompleteNumsType } from "./stores/store"



export const initialState = {
    num: 0,
    isOdd: false,
    completeNums: [] as CompleteNumsType,
}

export const notesSlice = createSlice ({
    name: 'notes',
    initialState,
    reducers: {
        increment(state, action) {
            state.num = action.payload
            state.isOdd = state.num % 2 === 0 ? false : true
        },
        decrement(state, action) {
            state.num = action.payload
            state.isOdd = state.num % 2 === 0 ? false : true
        },
        addCompleteNum(state, action) {
           state.completeNums.push(action.payload)
        }
    }
})


export const { increment, decrement, addCompleteNum } = notesSlice.actions;