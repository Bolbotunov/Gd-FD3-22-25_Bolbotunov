import { BrowserRouter, Route, Routes, Link } from 'react-router';
import HomePage from '../pages/HomePage';
import { HeaderNav } from '../styles/common.styled';
import { HeaderContainer } from '../styles/common.styled';



function App() {
  return (
    <>
    < HeaderContainer>
      <HeaderNav>
          <Link to='/'>Home</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/products'>Products</Link>
          <Link to='/diary'>Diary</Link>
          <Link to='/statistics'>Statistics</Link>
          <Link to='/settings'>Settings</Link>
      </HeaderNav>
      </HeaderContainer>
    </>
  );
}

export default App;


