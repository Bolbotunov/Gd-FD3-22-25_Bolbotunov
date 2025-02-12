import { useDispatch, useSelector } from "react-redux"
import { actions } from "./stores/store"





export default function ShowResult() {
    const storedText = useSelector((store:any) => store.notesSlice.message)
    const storedIcon = useSelector((store:any) => store.notesSlice.icon)
    const dispatch = useDispatch()

    function add() {
        const text = prompt('...')
        if (text) {
            dispatch(actions.notesSlice.add(text))
            dispatch(actions.notesSlice.changeIcon('X'))
        }
    }


    return (
        <>
            <button onClick = {add}>add</button>
            <p>{storedText} {storedIcon}</p>
        </>
    )
}