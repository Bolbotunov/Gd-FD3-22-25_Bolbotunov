import { useSelector, useDispatch } from "react-redux"
import { actions } from "./stores/testStore"

export default function MyTestPage() {
    const storedText = useSelector((testStore: any) => testStore.TestSlice.title)
    const dispatch = useDispatch()

    function showInfo() {
        const newText = prompt('...')
        const myDate = '0000000'
        if (newText) {
            dispatch(actions.TestSlice.add(newText))
        }
            dispatch(actions.TestSlice.showState(myDate))
    }

    return (
        <>
            <div>My Test result</div>
            <button onClick={showInfo} style={{width:'200px', height:'25px'}}>click</button>
            <p>{storedText}</p>
        </>
    )
}
