import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from 'react';
import { actions } from "./stores/store";
import { Todo } from "./todosSlice";
import { v4 } from "uuid";
import { todoSlice } from "./todosSlice";

export default function TodosPage() {
    
    const { todos } = useSelector((store: any) => store.todoSlice)
    const [filtered, setFiltered] = useState<Todo[]>([])
    const dispatch = useDispatch()


useEffect(() => {
    setFiltered(todos)
}, [todos])


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
                dispatch(actions.todoSlice.load(json)
                )}
            )
        // dispatch(actions.todoSlice.load([
        //     {
        //         id: v4(),
        //         text:'1 Text',
        //         completed: false,
        //     },
        //     {
        //         id: v4(),
        //         text:'2 Text',
        //         completed: true,
        //     },
        //     {
        //         id: v4(),
        //         text:'3 Text',
        //         completed: false,
        //     },
        // ]))
    }, [])

    function addTodoHandler() {
        const title = prompt('create todo')

        if (title) {
            dispatch(actions.todoSlice.add({
                title,
            }))
        }
    }

function searchHandler(value:string) {
    if(!value) {
        setFiltered(todos)
        return
    }
    const filteredNew = todos.filter((todo:any) => todo.title.includes(value))
    setFiltered(filteredNew)
    }



    return (
        <>
            <h4>TODOSPAGE</h4>
            <div>
                <button onClick={addTodoHandler}>Add Todo: </button>
                <input onChange={(e) => searchHandler(e.target.value)}/>
            </div>
            


            {Array.isArray(todos) && todos.length > 0 ? (
                filtered.map((todo: any) => (
                    <div key={todo.id}>
                        <label style={{textDecoration: todo.completed ?  'none' : "line-through" }}>
                            <input
                                type="checkbox" 
                                checked={todo.completed}
                                onChange={() => dispatch(actions.todoSlice.toggle(todo.id))}
                            />
                            #{todo.id} {todo.title}
                        </label>
                    </div>
                ))
            ) : (
                <p>No todos available</p>
            )}
        </>
    );

}
