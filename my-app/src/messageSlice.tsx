import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type MessageAddAction = PayloadAction<string>;
type MessageUpdateAction = PayloadAction<string>;
type MessageDeleteAction = PayloadAction


const initialState = {
    message: '',
}

const messageSlice = createSlice({
    name:'message',
    initialState,
    reducers: {
        add(state, action: MessageAddAction) {
            state.message = action.payload;
        },
        update(state, action: MessageUpdateAction) {
            state.message = action.payload;
        },
        remove(state, action: MessageDeleteAction) {
            state.message = '';
        },
    }
})


export default messageSlice;