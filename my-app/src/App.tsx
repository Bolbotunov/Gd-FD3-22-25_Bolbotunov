import './App.css';
import CreateRandom from './CreateRandom';
import { useState } from 'react';
import { nameContext } from './nameContext';
import { BrowserRouter } from 'react-router';
import TestComponentContext from './TestComponentContext';
import { NameProvider } from './nameContext';


export type TypeRandomProps = {
  num:number;
  setNum:(num: number) => void;
  showNum:string;
  setShowNum:(showNum: string) => void;
}

function App() {

  const [num, setNum] = useState<number>(NaN)
  const [showNum, setShowNum] = useState('')


  return (
    <>
  <NameProvider>
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <CreateRandom/>
      </header>
      <TestComponentContext/>
    </div>
    </BrowserRouter>
  </NameProvider>
  </>
  );
}

export default App;



