import { BrowserRouter, Route, Routes, Link } from 'react-router';
import HomePage from '../pages/HomePage';



function App() {
  return (
    <>
   <nav>
          <Link to='/'>Home</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/products'>Products</Link>
          <Link to='/diary'>Diary</Link>
          <Link to='/statistics'>Statistics</Link>
          <Link to='/settings'>Settings</Link>
    </nav>
    </>
  );
}

export default App;


