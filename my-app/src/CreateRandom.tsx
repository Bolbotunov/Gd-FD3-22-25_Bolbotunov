import CreateRandomInner from "./CreateRandomInner"
import { useContext } from "react"
import { nameContext } from "./nameContext"

export default function CreateRandom() {
    const { num, setNum, showNum, setShowNum } = useContext(nameContext)
    return (
        <>
        <CreateRandomInner/>
            <div>
                <p>text 1: {num} </p>
            </div>
            <div>
                <p>text 2:{showNum}</p>
            </div>
        </>
    )
}