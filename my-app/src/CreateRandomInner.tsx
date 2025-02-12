import { useContext } from "react"
import { nameContext } from "./nameContext"


export default function CreateRandomInner() {
    const { num, setNum, showNum, setShowNum } = useContext(nameContext)
    let handler = () =>  {
        setShowNum(String(num))
    }

    return (
        <div style={{display:'flex', gap:'20px'}}>
            <button onClick={handler}>btn</button>
            <input onChange={(e) => setNum(Number(e.target.value))}></input>
        </div>
    )
}