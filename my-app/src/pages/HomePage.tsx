import { useState } from 'react';
import { MyExampleComponent } from '../components/MyExampleComponent';
import { InputComponent } from '../components/InputComponent';
import CounterComponent2 from '../components/CounterComponent2';
import MyWrapper from '../components/MyWrapper';
import CounterComponent1 from '../components/counterComponent1';
import { Canvas, TextCanvas } from '../components/Canvas';
import InputWithSave from '../components/InputWithSave';
import LocalStorageTest from '../components/LocalStorageTest';
import NewTestWrapper from '../components/NewTestWrapper';
// type SetStateNumberType = (arg1: number) => void
// type SetStateNumberType = React.Dispatch<React.SetStateAction<number>>
// type UseCountLimitReturn = [number, SetStateNumberType]

export default function HomePage() {
    const [tab, setTab] = useState('one')
    return (
      <div className="App">
  <div>
    TABS:
    <div onClick={()=>setTab('one')}>Tab One</div>
    <div onClick={()=>setTab('two')}>Tab two</div>
  </div>
  <div>
    {tab ==='one' && <header className="App-header">
      <div>
          <NewTestWrapper/>
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
        </div>
      </header>
    }
     {tab ==='two' ? <div><p>content of tab 2</p> </div> : null}
      </div>
    </div>
    );
} 