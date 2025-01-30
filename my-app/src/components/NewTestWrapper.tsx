import { useEffect, useState } from "react"

export default function NewTestWrapper() {

    type ObjectForLS = {
        inputValue: string,
        doMark: boolean,
    }

const [inputValue, setInputValue] = useState('')
const [showData, setShowData] = useState<ObjectForLS | null>(null);
const [doMark, setDoMark] = useState(false)

const PASS = 'PASS'




function toggleMark() {
    setDoMark((prev => !prev))

}


function saveLS() {
    const data: ObjectForLS = {
        inputValue,
        doMark,
    }

    localStorage.setItem(PASS, JSON.stringify(data))
    showLS()
}

function showLS() {
    const dataLS = localStorage.getItem(PASS)
    if (dataLS) {
        let parsedData = JSON.parse(dataLS)
        setShowData(parsedData)
        setInputValue(parsedData.inputValue);
        setDoMark(parsedData.doMark)
    }
    
}

const handler = (e:React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)

useEffect(() => {
    showLS()
}, [])



    return (
        <div className="wrapper">
            <input style={{height:'30px'}}  onChange={handler}></input>
            <div className="btnsWrapper">
                <button className="btns" onClick={saveLS}>Save</button>
                <button className="btns">Add</button>
            </div>
            <div style={{border:'2px solid white', padding:'10px'}}>currentValue: {inputValue} </div>
            <div style={{border:'2px solid white', padding:'10px'}}>localStorage: {JSON.stringify(showData)} </div>
            <div className="container">
                <div className="cellsMark">
                    <div className="cells"><span style={{color:'gold'}}>Name: </span>{showData?.inputValue}</div>
                    <div className="cells mark" onClick={toggleMark}><span style={{color:'gold'}}>Mark: </span>{doMark ? 'V' : ''}</div>
                </div>
                
            </div>
        </div>
    )
}