import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type InitialStateType = {
    title: string;
    text: string,
    date: string,
    complete: boolean,
}


const initialState: InitialStateType = {
    title: '',
    text: 'text...',
    date: '01/01/2025',
    complete: false,
}

export const TestSlice = createSlice( {
    name:'test',
    initialState,
    reducers: {
        add(state, action) {
            state.title = action.payload
            state.complete = true
        },
        showState(state, action) {
            state.date = action.payload
            console.log(JSON.parse(JSON.stringify(state)))
        }
    }
})