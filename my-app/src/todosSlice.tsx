import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { v4 } from 'uuid'

type Todo = {
    id: number | string;
    title: string;
    completed: boolean;
}

type State = {
    todos: Todo[];
}

type AddTodo = Omit< Todo, 'id' | 'completed' >
// type AddTodo = Pick<Todo, 'text'>

type LoadPayload = PayloadAction<Todo[]>
type TogglePayload = PayloadAction<string>;
type AddPayload = PayloadAction<AddTodo>;



const initialState: State = {
    todos: [],
}

export const todoSlice = createSlice( {
    name: 'todos',
    initialState,
    reducers: {
        load(state, action: LoadPayload) {
            state.todos = action.payload
        },
        add(state, action: AddPayload) {
           const { title } = action.payload

           state.todos.push( {
            id: v4().slice(0, 4),
            title,
            completed: false,
           })
        },
        toggle(state, action: TogglePayload) {
        const matchingTodo = state.todos.find((todo) => todo.id === action.payload);
        if (matchingTodo) {
            matchingTodo.completed = !matchingTodo.completed
        }
      }
    }
})

