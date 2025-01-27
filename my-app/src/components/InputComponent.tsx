import { useState, useEffect } from "react"
export function InputComponent(props: any) {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [fullName, setFullName] = useState('')
  
  
    useEffect(() => {
      console.log('useEffect render')
    }, [])
    
    useEffect(() => {
      console.log('useEffect name')
      let a = name.toUpperCase() + lastName.toUpperCase()
      setFullName(a)
    }, [name, lastName])
  
    return <>
    <input onChange={(e) => setName(e.target.value)}/>
    <input onChange={(e) => setLastName(e.target.value)}/>
    <div>Entered: {fullName}</div>
    </>
  }