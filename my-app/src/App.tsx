// import React from 'react';
import React, { useState } from 'react';

import './App.css';




function CounterComponent1() {
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


function CounterComponent2() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div className='wrapperDiv'>
    <button onClick = {() => setCount1(count1 + 1)}>
      btn 3
    </button>
    <p>3 counter: <span>{count1}</span></p>
    <button onClick = {() => setCount2(count2 + 1)}>
      btn 4
    </button>
    <p>4 counter: <span>{count2}</span></p>
      </div>
  )
}



const obj: {name:string; year:string} = {
  name:'Lesson',
  year:'2025',
}

function Inner(props: { year: string} ) {
  return (
    <div>
      <h2>date start {props.year}</h2>
    </div>
  )
}

function Test(props: { name: string; year: string}) {
  return (
    <div>
      <h1>start project {props.name}</h1>
      <Inner year = {props.year}/>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Test {...obj}/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> HELLO
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <CounterComponent1/>
        <CounterComponent2/>
      </header>
    </div>
  );
}

export default App;

// почему редактор не просит типизировать переданный аргумент в useState