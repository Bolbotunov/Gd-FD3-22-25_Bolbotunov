import { createSlice, PayloadAction } from "@reduxjs/toolkit"


type Todo = {
    id: string;
    text: string;
    completed: boolean;
}

type State = {
    todos: Todo[];
}

type LoadPayload = PayloadAction<Todo[]>

const initialState: State = {
    todos: [],
}

export const todoSlice = createSlice( {
    name: 'todos',
    initialState,
    reducers: {
        load(state, action: LoadPayload) {
            state.todos = action.payload
        }
    }
})

export const { load } = todoSlice.actions;
export default todoSlice.reducer