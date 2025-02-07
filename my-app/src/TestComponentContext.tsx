import { useContext } from "react"
import { nameContext } from "./nameContext"


export default function TestComponentContext() {
    const { num, setNum, showNum, setShowNum } = useContext(nameContext)
    return (
        <>
        <p>{num}</p>
        <p>{showNum}</p>
        </>
        
    )
}