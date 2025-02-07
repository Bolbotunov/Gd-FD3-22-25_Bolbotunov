import { useEffect, useState } from "react";
import { store } from "./redux";

export default function Notes() {
    const [storedMessage, setStoredMessage] = useState()
// useEffect(() => {
    const unsubscribe =  store.subscribe(() => {
        const state = store.getState()
        setStoredMessage(state.message)
    })
//     return unsubscribe()
// }, [])


   
    function addHandler() {
        const text = prompt('Enter Message')

        if (text) {
            store.dispatch({ type: 'add' , message: text})
        }
    }
    
    function updateHandler() {
        const { message } = store.getState()
        const text = prompt('Enter Message', message)

        if (text) {
            store.dispatch({ type: 'update' , message: text})
        }
    }
    
    function deleteHandler() {
        const text = window.confirm()

        if (text) {
            store.dispatch({ type: 'delete' , message: text})
        }
    }


    return <>
     <button onClick = {addHandler}>add</button>
     <button onClick = {updateHandler}>Update</button>
     <button onClick = {deleteHandler}>Delete</button>
     <p>{storedMessage}</p>
    </>
}