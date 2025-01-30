import React, { useState } from 'react';
import './App.css';
import { MyExampleComponent } from './components/MyExampleComponent';
import { InputComponent } from './components/InputComponent';
import CounterComponent2 from './components/CounterComponent2';
import MyWrapper from './components/MyWrapper';
import CounterComponent1 from './components/counterComponent1';
import { Canvas, TextCanvas } from './components/Canvas';
import InputWithSave from './components/InputWithSave';
import LocalStorageTest from './components/LocalStorageTest';

// type SetStateNumberType = (arg1: number) => void
// type SetStateNumberType = React.Dispatch<React.SetStateAction<number>>
// type UseCountLimitReturn = [number, SetStateNumberType]


export function SetLimit(limit: number): [number, React.Dispatch<React.SetStateAction<number>>] {
  const [count, setCount] = useState(0);

  let value = count
  if(count > limit) {
    value = limit
  }

  return [value, setCount]
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <LocalStorageTest/>
        <InputWithSave/>
        <br></br>
        <br></br>
        <Canvas/>
        <TextCanvas/>
        <MyExampleComponent/>
        <MyWrapper>
        <CounterComponent1/>
        <CounterComponent2/>
        <InputComponent/>
        </MyWrapper>
      </header>
    </div>
  );
}

export default App;



