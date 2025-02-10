import { useState, useEffect } from "react"
import { store } from ".."
import { useDispatch } from "react-redux"





export function InputComponent(props: any) {
const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [fullName, setFullName] = useState('')
  
  
    useEffect(() => {
    }, [])
    
    useEffect(() => {
      let a = name.toUpperCase() + lastName.toUpperCase()
      setFullName(a)
      dispatch({ type: 'input', name, lastName})
    }, [name, lastName])
  
    return <>
    <input onChange={(e) => setName(e.target.value)}/>
    <input onChange={(e) => setLastName(e.target.value)}/>
    <div>Entered: {fullName}</div>
    </>
  }