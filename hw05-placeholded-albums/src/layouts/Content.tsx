import HomePage from '../pages/HomePage';
import { Routes, Route } from 'react-router'
import { AlbumsPage } from '../pages/AlbumsPage';
import { AlbumPage } from '../pages/AlbumPage';
import { PhotosPage } from '../pages/PhotosPage';
import ErrorPage from '../pages/ErrorPage';
import { MyContent } from '../styles/MyContent.styled';
import { Navigate } from 'react-router';
import NotFoundPage from '../pages/NotFoundPage';
import { UsersPage } from '../pages/UsersPage';
import UserPage from '../pages/UserPage';


export default function Content () {
    return (
        <>
         
        <MyContent>
          <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/albums' element={<AlbumsPage/>} />
                <Route path='/albums/:id' element = {<AlbumPage/>}/>
                <Route path="/photos" element={<PhotosPage />} />
                <Route path='/users' element={<UsersPage/>} />
                <Route path='/users/:id' element = {<UserPage/>}/>
                <Route path='/error' element = {<ErrorPage/>}/>
                <Route path='*' element = {<NotFoundPage/>}/>
          </Routes>
        </MyContent>
        </>
    )
}