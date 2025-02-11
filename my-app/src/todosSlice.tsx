import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit';

type Todo = {
    id: string;
    text: string;
    completed: boolean;
}

type State = {
    todos: Todo[];
}
const initialState: State = {
    todos: [],
}

type LoadPayload = PayloadAction<Todo[]>
type AddPayload = PayloadAction<Todo>
type TogglePayload = PayloadAction<Todo['id']>



const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        load(state, action: LoadPayload) {
            state.todos = action.payload
        },
        add(state, action: AddPayload) {
            const { id, text } = action.payload
            state.todos.push( {
                id,
                text,
                completed: false,
            })
        },
        toggle (state, action: TogglePayload) {
            const matchingTodo = state.todos.find((todo) => todo.id === action.payload)
            if (matchingTodo) {
                matchingTodo.completed = !matchingTodo.completed
            }
        }
    }
})

export default todosSlice