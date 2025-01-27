import { useEffect, useState } from "react"


export default function LocalStorageTest() {
    const [someData, setSomeData] = useState('')
    const [getData, setgetData] = useState('')

    
    function clickFn() {
        localStorage.setItem('key', someData)
        console.log(someData)
    }

    function changeFn(e: React.ChangeEvent<HTMLInputElement>) {
       setSomeData(e.target.value)
    }

    function showFn() {
        let completeData:any = localStorage.getItem('key')
        setgetData(completeData)
       
    }

    useEffect(() => {
    }, [someData])


    return (
        <>
        <div>
            <button style={{
                height:'30px',
                margin:'20px',
                width:'150px'
            }} onClick = {clickFn}>Save</button>
        <input style = {{
            height: '30px',
            width: '350px',
            backgroundColor: 'silver',
            border: '1px solid red'
        }} type='text' onChange={changeFn}/>
         <button style={{
                height:'30px',
                margin:'20px',
                width:'150px'
            }} onClick = {showFn}>Show LS</button>
        <div><p>Output from LS:{getData}</p></div>
        </div></>
    )
}