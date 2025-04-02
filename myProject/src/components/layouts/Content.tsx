import HomePage from '../../pages/homePage/HomePage';
import { Route, Routes } from 'react-router';
import ProfilePage from '../../pages/profilePage/ProfilePage';
import ProductsPage from '../../pages/productsPage/ProductsPage';
import ProductPage from '../../pages/productsPage/ProductPage';
import DiaryPage from '../../pages/diaryPage/DiaryPage';
import StatisticsPage from '../../pages/statisticsPage/StatisticsPage';
import { ContentStyle } from './Content.styled';
import LoginPage from '../../pages/LoginPage';
import { Navigate } from 'react-router';
import RegisterPage from '../../pages/RegisterPage';
import AuthCheck from '../../authorization/AuthCheck';
import CreateProductPage from '../../pages/productsPage/CreatingProductPage';
import NotFoundPage from '../../pages/NotFoundPage';
import ProtectedRoute from '../ProtectedRoutes';

export default function Content() {
  return (
    <ContentStyle>
      <AuthCheck>
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />

          <Route
            path='/home'
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path='/products'
            element={
              <ProtectedRoute>
                <ProductsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path='/products/:id'
            element={
              <ProtectedRoute>
                <ProductPage />
              </ProtectedRoute>
            }
          />
          <Route
            path='/products/creating'
            element={
              <ProtectedRoute>
                <CreateProductPage />
              </ProtectedRoute>
            }
          />
          <Route
            path='/diary'
            element={
              <ProtectedRoute>
                <DiaryPage />
              </ProtectedRoute>
            }
          />
          <Route
            path='/diary/:id'
            element={
              <ProtectedRoute>
                <DiaryPage />
              </ProtectedRoute>
            }
          />
          <Route
            path='/statistics'
            element={
              <ProtectedRoute>
                <StatisticsPage />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </AuthCheck>
    </ContentStyle>
  );
}
