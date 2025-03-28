import HomePage from '../../pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router';
import ProfilePage from '../../pages/profilePage/ProfilePage';
import ProductsPage from '../../pages/productsPage/ProductsPage';
import ProductPage from '../../pages/productsPage/ProductPage';
import DiaryPage from '../../pages/diaryPage/DiaryPage';
import StatisticsPage from '../../pages/statisticsPage/StatisticsPage';
import SettingsPage from '../../pages/SettingsPage';
import { ContentStyle } from './Content.styled';
import LoginPage from '../../pages/LoginPage';
import { Navigate } from 'react-router';
import RegisterPage from '../../pages/RegisterPage';
import AuthCheck from '../authorization/AuthCheck';
import CreateProductPage from '../../pages/productsPage/CreatingProductPage';

export default function Content() {
  return (
    <>
      <ContentStyle>
        <AuthCheck>
          <Routes>
            <Route path='/' element={<Navigate to='/login' />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/products/:id' element={<ProductPage />} />
            <Route path='/products/creating' element={<CreateProductPage />} />
            <Route path='/diary' element={<DiaryPage />} />
            <Route path='/diary/:id' element={<DiaryPage />} />
            <Route path='/statistics' element={<StatisticsPage />} />
            <Route path='/settings' element={<SettingsPage />} />
          </Routes>
        </AuthCheck>
      </ContentStyle>
    </>
  );
}
