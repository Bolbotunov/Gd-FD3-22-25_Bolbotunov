import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import { actions } from "./stores/store";

export default function TodosPage() {
    const todos = useSelector((store: any) => store.todoSlice.todos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.todoSlice.load([
            {
                id:'1',
                text:'1 Text',
                completed: false,
            },
            {
                id:'2',
                text:'2 Text',
                completed: false,
            },
            {
                id:'3',
                text:'3 Text',
                completed: false,
            },
            
        ]))
    }, [dispatch])




    return (
        <>
            <h4>TODOSPAGE</h4>
            {Array.isArray(todos) && todos.length > 0 ? (
                todos.map((todo: any) => (
                    <div key={todo.id}>
                        <label>
                            <input
                                type="checkbox" 
                                checked={todo.completed}
                                onChange={() => console.log(`Toggle complete for ${todo.id}`)}
                            />
                            #{todo.id} {todo.text}
                        </label>
                    </div>
                ))
            ) : (
                <p>No todos available</p>
            )}
        </>
    );
    
}

