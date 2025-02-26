import HomePage from '../pages/HomePage';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router'
import { AlbumsPage } from '../pages/AlbumsPage';
import { AlbumPage } from '../pages/AlbumPage';
import PostId from '../pages/AlbumId';
import ErrorPage from '../pages/ErrorPage';
import { MyContent } from '../styles/MyContent.styled';
import { Navigate } from 'react-router';
import NotFoundPage from '../pages/NotFoundPage';
import UserId from '../pages/UserId';
import { UsersPage } from '../pages/UsersPage';


export default function Content () {
  const [validId, setValidId] = useState<string[]>([])

    return (
        <>
        <MyContent>
          <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/albums' element={<AlbumsPage/>} />
                <Route path='/albums/:id' element = {<AlbumPage/>}/>
                <Route path='/users' element={<UsersPage/>} />
                <Route path='/users/:id' element = {<UserId/>}/>
                <Route path='/error' element = {<ErrorPage/>}/>
                <Route path='*' element = {<NotFoundPage/>}/>
          </Routes>
        </MyContent>
        </>
    )
}