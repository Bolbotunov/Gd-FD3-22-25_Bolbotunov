import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    message: '',
    icon: 'V'
}


export const notesSlice = createSlice( {
    name: 'nodes',
    initialState,
    reducers: {
        add(state, action) {
            state.message = action.payload;
        },
        changeIcon(state, action) {
            state.icon = state.icon === 'X' ? 'V' : 'X'
        }
    }
})