import { useState } from "react";
import { store } from ".";
import { actionMessageAdd,actionMessageUpdate, actionMessageDelete } from "./messageReducer";


export default function Notes() {
    const [storedMessage, setStoredMessage] = useState()
    const unsubscribe =  store.subscribe(() => {
        const state = store.getState()
        setStoredMessage(state.messageState.message)
    })


   
    function addHandler() {
        const text = prompt('Enter Message')

        if (text) {
            store.dispatch(actionMessageAdd(text))
        }
    }
    
    function updateHandler() {
        const { message } = store.getState()
        const text = prompt('Enter Message', message)

        if (text) {
            store.dispatch(actionMessageUpdate(text))
        }
    }
    
    function deleteHandler() {
        const confirmed = window.confirm('delete message?')

        if (confirmed) {
            store.dispatch(actionMessageDelete())
        }
    }


    return <>
     <button onClick = {addHandler}>add</button>
     <button onClick = {updateHandler}>Update</button>
     <button onClick = {deleteHandler}>Delete</button>
     <p>{storedMessage}</p>
    </>
}