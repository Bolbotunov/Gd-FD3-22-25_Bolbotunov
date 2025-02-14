import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from 'react';
import { actions } from "./stores/store";
import { Todo } from "./todosSlice";
import { v4 } from "uuid";
import { todoSlice } from "./todosSlice";

export default function TodosPage() {
    const { filteredTodos } = useSelector((store: any) => store.todoSlice)
    const dispatch = useDispatch()

    useEffect(() => {
        type JSONServerTodo = {
            userId: number,
            id: number,
            title: string,
            completed: boolean,
        }

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then((json: JSONServerTodo[]) => {
                dispatch(actions.todoSlice.load(json))
            })
    }, [])

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
