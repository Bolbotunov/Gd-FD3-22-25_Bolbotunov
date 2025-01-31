import './App.css';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import TestPage from './pages/TestPage';
import DynamicPage from './pages/DynamicPage';
import ExternalPage from './pages/ExternalPage';
import { Canvas } from './components/Canvas';
import CounterComponent1 from './components/counterComponent1';
import { useNavigate } from 'react-router';

export function SetLimit(limit: number): [number, React.Dispatch<React.SetStateAction<number>>] {
  const [count, setCount] = useState(0);

  let value = count
  if(count > limit) {
    value = limit
  }
  return [value, setCount]
}

function App() {
  // let navigate = useNavigate()
 return (
  <>
   <BrowserRouter>
        <nav>
          {/* <a href='/'>Home</a> ||
          <a href='/test'>Test</a>|| */}
          <Link to='/'>Home2</Link> ||
          <Link to='/test'>Test2</Link> ||

          <Link to={`/dynamic/${Math.random()}/courses/new`}>My course</Link> ||
          <Link to='/external'>External</Link> ||
          <Link to='/external/canvas'>Canvas</Link> ||
          <Link to='/external/counter'>Counter</Link> ||
        </nav>
      <Routes>
        <Route path='/' element = {<HomePage/>}/>
        <Route path='/test' element = {<TestPage/>}/>
        <Route path='/dynamic/:id/courses/:courseId' element = {<DynamicPage/>}/>

        <Route path='/external' element={<ExternalPage/>}>
          <Route path='/external/canvas' element = {<Canvas/>}/>
          <Route path='/external/counterComponent1' element = {<CounterComponent1/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
 )
}

export default App;



