import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from 'react';
import { actions } from "./stores/store";
import { Todo } from "./todosSlice";
import { v4 } from "uuid";
import { todoSlice } from "./todosSlice";

export default function TodosPage() {
   
    const { todos } = useSelector((store: any) => store.todoSlice)
    const [filtered, setFiltered] = useState<Todo[]>([])
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        if (!search) {
            setFiltered(todos)
            return;
        }

    const filteredNew = todos
    .filter((todo: Todo) => todo.title.toLowerCase().includes(search.toLowerCase()))
    .map((todo: Todo) => {
        let title = todo.title;
        // const startIndex = title.indexOf(search);
        // title = title.slice(0, startIndex) + '<mark>' + title.slice(startIndex);
        // title = title.slice(0, startIndex + '<mark>'.length + search.length)
        //  + '<mark>'
        //  + title.slice(startIndex + '<mark>'.length + search.length);

        const parts = title.split(search)
        title = parts.join('<mark>' + search + '</mark>')
        return { ...todo, title, };
    });

        setFiltered(filteredNew);
}, [todos, search])

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

function searchHandler(search?: string) {
    setSearch(search ?? '')
}





    return <>
            <h4>TODOSPAGE</h4>
            <div>
                <button onClick={addTodoHandler}>Add Todo: </button>
                <input onChange={(e) => searchHandler(e.target.value)}/>
            </div>

            <div>{filtered.map((todo: any) =>  <>
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
