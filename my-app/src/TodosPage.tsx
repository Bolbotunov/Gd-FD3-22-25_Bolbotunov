import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import { actions } from "./stores/store";
import { v4 } from "uuid";

export default function TodosPage() {
    const todos = useSelector((store: any) => store.todoSlice.todos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.todoSlice.load([
            {
                id: v4(),
                text:'1 Text',
                completed: false,
            },
            {
                id: v4(),
                text:'2 Text',
                completed: true,
            },
            {
                id: v4(),
                text:'3 Text',
                completed: false,
            },
            
        ]))
    }, [])

    function addTodoHandler() {
        const text = prompt('create todo')

        if (text) {
            dispatch(actions.todoSlice.add({
                text,
            }))
        }
    }


    return (
        <>
            <h4>TODOSPAGE</h4>
            <div>
                <button onClick={addTodoHandler}>Add Todo: </button>
            </div>
            
            {Array.isArray(todos) && todos.length > 0 ? (
                todos.map((todo: any) => (
                    <div key={todo.id}>
                        <label style={{textDecoration: todo.completed ?  'none' : "line-through" }}>
                            <input
                                type="checkbox" 
                                checked={todo.completed}
                                onChange={() => dispatch(actions.todoSlice.toggle(todo.id))}
                            />
                            #{todo.id.slice(0, 4)} {todo.text}
                        </label>
                    </div>
                ))
            ) : (
                <p>No todos available</p>
            )}
        </>
    );
    
}

