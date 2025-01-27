import { useState } from "react"

// const [value:count1, setCount:setCount1] = noLimits(100);
// const [value:count2, setCount:setCount2] = noLimits(100);


export default function CounterComponent2() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(1);
    const [counters, setCounters] = useState( {counter1: 0, counter2: 0} )
    // const [letter, setLetter] = useState('sdcds');
  
  
    function handler0() {
      setCounters({
        counter1:counters.counter1 + 1,
        counter2:counters.counter2,
      })
    }
  
    function handler00() {
      setCounters({
        counter1:counters.counter1,
        counter2:counters.counter2 - 1,
      })
    }
  
    function handler1() {
      setCount1(count1 + 2)
      setCount2(count2 * 2)
    }
  
    function handler2() {
      setCount1(count1 - 2)
      setCount2(count2 / 2)
    }
  
    function clear() {
      setCount1(0)
      setCount2(1)
    }
    // useEffect(() => {
    //   console.log('useEffect count')
    //   let b = letter.toUpperCase()
    //   setLetter(b)
    // }, [count1, count2])
  
    return (
      <div className='wrapperDiv'>
        {/* <p>ans: {letter}</p> */}
      <button onClick = {handler1}>
        btn plus
      </button>
      <p>11 counter: <span>{count1}</span></p>
  
      <button onClick = {handler2}>
        btn minus
      </button>
      <p>22 counter: <span>{count2}</span></p>
  
      <button onClick = {clear}>
        clear
      </button>
  
      <button onClick = {handler0}>
        test
      </button>
      <p>test: <span>{counters.counter1}</span></p>
  
      <button onClick = {handler00}>
        test2
      </button>
      <p>test: <span>{counters.counter2}</span></p>
        </div>
    )
  }
