import { useEffect } from "react"
import { useState } from "react"

type savedJSON = {
    message: string;
    age: number;
}
const LOCAL_STORAGE_KEY = 'ita-key'

export default function InputWithSave() {
const [message, setMessage] = useState('')
const [age, setAge] = useState(NaN)
const [savedMessage, setSavedMessage] = useState('')
const [savedAge, setSaveAge] = useState(NaN)



function save() {
    const data: savedJSON = {
        message,
        age,
    }
    console.log(data)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
}


function load() {
    try {
        const isMessage = localStorage.getItem(LOCAL_STORAGE_KEY)
        if(isMessage) {
            const parsed: savedJSON = JSON.parse(isMessage)
            setSavedMessage(parsed.message)
            setSaveAge(parsed.age)
        }
    } catch (error) {
        console.log('error' , error)
    }
}

useEffect(() => {
    load()
}, [])

    return <>
    <input onChange={(e) => setMessage(e.target.value)} />
    <br></br>
    <input onChange={(e) => setAge(Number(e.target.valueAsNumber))} type='number' />
    <button onClick={save}> Save </button>
    <p>Saved M: {savedMessage} </p>
    <p>Saved A: {savedAge} </p>
    <button onClick={load}> Refresh </button>
    </>
}