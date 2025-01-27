import { useState } from "react"

export default function CounterComponent1() {
    const [count, setCount] = useState( {counter1: 0, counter2: 0} )
    return (
      <div className='wrapperDiv'>
      <button onClick = {() => setCount(a => {
        return {
        ...a,
        counter1: a.counter1 + 1
      }
      })}>
        btn 1
      </button>
      <p>1 counter: <span>{count.counter1}</span></p>
      <button onClick = {() => setCount(a =>({
        ...a,
        counter2: a.counter2 + 1
      }))}>
        btn 2
      </button>
      <p>2 counter: <span>{count.counter2}</span></p>
        </div>
    )
  }