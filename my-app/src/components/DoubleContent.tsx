import { useDispatch, useSelector } from "react-redux"
import { store } from "../stores/store"
import { TypeNoteSlice } from "../stores/store"
import { addCompleteNum, decrement, increment, notesSlice, } from "../notesSlice"


export default function DoubleContent() {

    const dispatch = useDispatch()
    const count = useSelector((store: TypeNoteSlice) => store.notesSlice.num)
    let odd = useSelector((store: TypeNoteSlice) => store.notesSlice.isOdd)
    let completeCount = useSelector((store: TypeNoteSlice) => store.notesSlice.completeNums)



return <>
    <b>VVVVVVVVVVVVVVVVVVVV</b>
    <div>
        <button  style={{width:'80px'}}>Add number</button>
    </div>
    <div style={{width:'80%', height:'auto', margin:'20px', display:'flex', gap:'10px'}}>
    <p>Добавление нечетных чисел:</p>

            {completeCount.map((item: any) => (
                item[1] ? (<div style={{border:'2px solid black', backgroundColor:'#f2df81', color:'black', padding:'10px'}}>
                        <p>Число: {item[0]}</p>
                        <p>это нечетное число</p>
                    </div> ) : ''
            ))}

    </div>
    </>
}