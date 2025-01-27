import { useEffect } from "react"
import { useState } from "react"



// type savedJSON = {
//     message: string;
//     age: number;
// }
// const LOCAL_STORAGE_KEY = 'ita-key'

// export default function InputWithSave() {
// const [message, setMessage] = useState('')
// const [age, setAge] = useState(NaN)
// const [savedMessage, setSavedMessage] = useState('')
// const [savedAge, setSaveAge] = useState(NaN)
// const [loading, setLoading] = useState(false)


// function save() {
//     setLoading(true)
//     const data: savedJSON = {
//         message,
//         age,
//     }
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
//     setLoading(false)
// }


// function load() {
//     try {
//         const isMessage = localStorage.getItem(LOCAL_STORAGE_KEY)
//         if(isMessage) {
//             const parsed: SavedJSON = JSON.parse(isMessage)
//             setSavedMessage(parsed.message)
//             setSaveAge(parsed.age)
//         }
//     } catch (error) {
//         console.log('error' , error)
//     }
// }

// useEffect(() => {
//     load()
// }, [])

//     return <>
//     <input onChange={(e) => setMessage(e.target.value)} />
//     <br></br>
//     <input onChange={(e) => setAge(e.target.valueAsNumber)} />
//     <button onClick={save}> Save </button>
//     <p>Saved M: {savedMessage} </p>
//     <p>Saved A: {savedMessage} </p>
//     <button onClick={load}> Refresh </button>
//     </>
// }