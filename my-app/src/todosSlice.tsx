import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { v4 } from 'uuid'

export type Todo = {
    id: number | string;
    title: string;
    completed: boolean;
}

export type State = {
    search: string;
    todos: Todo[];
    filteredTodos: Todo[];
}

type AddTodo = Omit< Todo, 'id' | 'completed' >
// type AddTodo = Pick<Todo, 'text'>

type LoadPayload = PayloadAction<Todo[]>
type TogglePayload = PayloadAction<string>;
type AddPayload = PayloadAction<AddTodo>;
type FilterPayload = PayloadAction<{search:string}>



const initialState: State = {
    search: '',
    todos: [],
    filteredTodos: [],
}

export const todoSlice = createSlice( {
    name: 'todos',
    initialState,
    reducers: {
        load (state, action: LoadPayload) {
            state.todos = action.payload
            state.filteredTodos = state.todos
        },
        add (state, action: AddPayload) {
           const { title } = action.payload

           state.todos.push( {
            id: v4().slice(0, 4),
            title,
            completed: false,
           })
        },
        toggle (state, action: TogglePayload) {
        const matchingTodo = state.filteredTodos.find(
            (todo) => todo.id === action.payload);
        if (matchingTodo) {
            matchingTodo.completed = !matchingTodo.completed
        }
        },
        filter (state, action: FilterPayload) {
            if (!action.payload.search) {
                state.search = ''
                state.filteredTodos = state.todos;
                return;
            }

            const { search } = action.payload
            state.search = ''
            const filteredNew = state.todos
            .filter((todo: Todo) => todo.title.toLowerCase().includes(search.toLowerCase()))
            .map((todo: Todo) => {
            let title = todo.title;
            const parts = title.split(search)
            title = parts.join('<mark>' + search + '</mark>')
            return { 
                ...todo,
                 title,
                };
        });

            state.filteredTodos = filteredNew
        }
    }
})

