import { SetLimit } from "../App";

// const [value:count1, setCount:setCount1] = noLimits(100);
// const [value:count2, setCount:setCount2] = noLimits(100);


export default function CounterComponent2() {
    const [count1, setCount1] = SetLimit(100);
    const [count2, setCount2]  = SetLimit(100);
    // const [counters, setCounters] = useState( {counter1: 0, counter2: 0} )
  
    function handler1() {
      setCount1(count1 + 20)
      setCount2(count2 * 2)
    }
  
    function handler2() {
      setCount1(count1 - 2)
      setCount2(count2 / 2)
    }
  

    return (
      <div className='wrapperDiv'>
      <button onClick = {handler1}>
        btn plus
      </button>
      <p>11 counter: <span>{count1}</span></p>
  
      <button onClick = {handler2}>
        btn minus
      </button>
      <p>22 counter: <span>{count2}</span></p>
        </div>
    )
  }


