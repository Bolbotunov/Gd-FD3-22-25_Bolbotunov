import { useDispatch, useSelector } from "react-redux"
import { store } from "../stores/store"
import { TypeNoteSlice } from "../stores/store"
import { addCompleteNum, decrement, increment, notesSlice } from "../notesSlice"
import { extraSlice } from "../extraSlice"
import {  incrementCounter } from "../extraSlice"


export default function Content() {
    const dispatch = useDispatch()
    const count = useSelector((store: TypeNoteSlice) => store.notesSlice.num)
    let odd = useSelector((store: TypeNoteSlice) => store.notesSlice.isOdd)
    let completeCount = useSelector((store: TypeNoteSlice) => store.notesSlice.completeNums)
    let counter = useSelector((store: TypeNoteSlice) => store.extraSlice.count)

    function handlerIncrement() {
        dispatch(increment(count + 1))
    }

    function handlerDecrement() {
        dispatch(decrement(count - 1))
    }

    function handlerAddCompleteNum() {
       dispatch(addCompleteNum([count, odd]))
       dispatch( incrementCounter())
    }

    return <>
    <div style={{display:'flex', gap:'10px'}}>
        <button style={{width:'50px'}} onClick={handlerIncrement}>+</button>
        <button  style={{width:'50px'}} onClick={handlerDecrement}>-</button>

    </div>
    <div>
  
            <p>MyNotes: {count} <br></br>isOdd: {odd ? 'true' : 'false'} </p>
            <button  style={{width:'80px'}} onClick={handlerAddCompleteNum}>Add number</button>
        </div>
            <div style={{width:'80%', height:'auto', margin:'20px', display:'flex', gap:'10px'}}>
                {completeCount.map((item) => (
                    <div style={{border:'2px solid black', backgroundColor:'#f2df81', color:'black', padding:'10px'}}>
                    <p>Число: {item[0]}</p>
                    <p>Нечетное: {item[1] ? 'true' : 'false'}</p>
                    </div>
                    
                ))}
            </div>
            <p>считаем общее количество: {counter}</p>
    </>
}