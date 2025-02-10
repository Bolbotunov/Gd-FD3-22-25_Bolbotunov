import { actionMessageAdd,actionMessageUpdate, actionMessageDelete } from "./messageReducer";
import { useDispatch, useSelector } from "react-redux"

export default function Notes() {
    const { message: storedMessage } = useSelector((store: any) => store.messageState)
    const dispatch = useDispatch()

    function addHandler() {
        const text = prompt('Enter Message')

        if (text) {
            dispatch(actionMessageAdd(text))
        }
    }
    
    function updateHandler() {
        const text = prompt('Enter Message', storedMessage)

        if (text) {
            dispatch(actionMessageUpdate(text))
        }
    }
    
    function deleteHandler() {
        const confirmed = window.confirm('delete message?')

        if (confirmed) {
            dispatch(actionMessageDelete())
        }
    }


    return <>
     <button onClick = {addHandler}>add</button>
     <button onClick = {updateHandler}>Update</button>
     <button onClick = {deleteHandler}>Delete</button>
     <p>{storedMessage}</p>
    </>
}