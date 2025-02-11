import './App.css';
import CreateRandom from './CreateRandom';
import { useState } from 'react';
import { BrowserRouter } from 'react-router';
import TestComponentContext from './TestComponentContext';
import { NameProvider } from './nameContext';
import Notes from './Notes';
import { store } from '.';
import { Provider } from 'react-redux';
import ShowCount from './ShowCount';


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
     <Provider store = { store }>
      <NameProvider>
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <CreateRandom/>
              <div style={{display:'flex', gap:'20px'}}>
                <Notes/>
              </div>
              <ShowCount/>
            </header>
            <TestComponentContext/>
          </div>
        </BrowserRouter>
      </NameProvider>
    </Provider>
  </>
  );
}

export default App;