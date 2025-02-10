import { useDispatch, useSelector } from "react-redux"
import { useTypeSelector } from "."
import { actions } from "."

export default function Notes() {
    const storedMessage = useTypeSelector((store) => store.messageSlice.message)
    const dispatch = useDispatch()

    function addHandler() {
        const text = prompt('Enter Message')

        if (text) {
            dispatch(actions.messageSlice.add(text))
        }
    }
    
    function updateHandler() {
        const text = prompt('Enter Message', storedMessage)

        if (text) {
            dispatch(actions.messageSlice.update(text))
        }
    }
    
    function deleteHandler() {
        const confirmed = window.confirm('delete message?')

        if (confirmed) {
            dispatch(actions.messageSlice.remove())
        }
    }


    return <>
     <button onClick = {addHandler}>add</button>
     <button onClick = {updateHandler}>Update</button>
     <button onClick = {deleteHandler}>Delete</button>
     <p>{storedMessage}</p>
    </>
}