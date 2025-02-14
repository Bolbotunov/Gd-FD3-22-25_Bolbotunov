import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from 'react';
import { actions } from "./stores/store";
import { getTodos, getPosts, getTodoById } from "./api/jsonplaceholder";
import { Todo } from "./todosSlice";
import { v4 } from "uuid";
import { todoSlice } from "./todosSlice";

// type CallbackFunction = (error: Error | null, data? any | null) => void

// function getTodos(callback: CallbackFunction) {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//             .then(response => response.json())
//             .then((json: JSONServerTodo[]) => {
//                 callback(null, json);
//             })
//             .catch((error) => callback(error))
//             return Promise
// }


export default function TodosPage() {
    const { filteredTodos } = useSelector((store: any) => store.todoSlice)
    const dispatch = useDispatch()

    useEffect(() => {
        async function load() {
            const data = await getTodos()
            const dataPosts = await getPosts()
            dispatch(actions.todoSlice.load(data))
        }
        load()
        }, [])

        // getTodos()
        // .then((data) =>  dispatch(actions.todoSlice.load(data)))
        // .catch((error) => console.error(error))

                // fetch('https://jsonplaceholder.typicode.com/todos')
        //     .then(response => response.json())
        //     .then((json: JSONServerTodo[]) => {
        //     })



    function addTodoHandler() {
        const title = prompt('create todo')

        if (title) {
            dispatch(actions.todoSlice.add({
                title,
            }))
        }
    }

function searchHandler(value?: string) {
    dispatch(actions.todoSlice.filter( { search: value ?? '' }))
}

    return <>
            <h4>TODOSPAGE</h4>
            <div>
                <button onClick={addTodoHandler}>Add Todo: </button>
                <input onChange={(e) => searchHandler(e.target.value)}/>
            </div>

            <div>{filteredTodos.map((todo: any) =>  <>
                        <label style={{textDecoration: todo.completed ?  'none' : "line-through" }}>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => dispatch(actions.todoSlice.toggle(todo.id))}
                            />
                            #{todo.id} <span dangerouslySetInnerHTML = {{__html: todo.title}}></span>
                        </label><br/>
        </>)}
        </div>
        </>
}
