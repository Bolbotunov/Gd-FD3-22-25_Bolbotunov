import HomePage from './pages/HomePage';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router';
import ProfilePage from './pages/ProfilePage';
import ProductsPage from './pages/ProductsPage';
import DiaryPage from './pages/DiaryPage';
import StatisticsPage from './pages/StatisticsPage';
import SettingsPage from './pages/SettingsPage';


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/profile' element={<ProfilePage/>} />
                <Route path='/products' element = {<ProductsPage/>}/>
                <Route path="/diary" element={<DiaryPage />} />
                <Route path='/statistics' element={<StatisticsPage/>} />
                <Route path='/settings' element = {<SettingsPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;



