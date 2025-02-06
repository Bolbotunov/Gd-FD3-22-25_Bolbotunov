import HomePage from '../pages/HomePage';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router'
import ContactPage from '../pages/ContactPage';
import ContactText from '../pages/ContactText';
import ContactImage from '../pages/ContactImage';
import TermsPage from '../pages/TermsPage';
import AboutPage from '../pages/AboutPage';
import { PostsPage } from '../pages/PostsPage';
import PostId from '../pages/PostId';
import ErrorPage from '../pages/ErrorPage';
import { MyContent } from '../styles/MyContent.styled';
import { Navigate } from 'react-router';
import NotFoundPage from '../pages/NotFoundPage';


export default function Content () {
  const [validId, setValidId] = useState<string[]>([])
  useEffect(() => {
        console.log('Valid IDs:', validId);
}, [validId]);

    return (
        <>
        <MyContent>
          <Routes>
                <Route path='/' element={<Navigate to='/start' />} />
                <Route path='/start' element = {<HomePage/>}/>
                <Route path='/contact' element = {<ContactPage/>}>
                  <Route path='text' element = {<ContactText/>}/>
                  <Route path='image' element = {<ContactImage/>}/>
                </Route>
                <Route path='/contact/about' element = {<AboutPage/>}/>
                <Route path='/contact/terms' element = {<TermsPage/>}/>
                <Route path='/posts' element={<PostsPage setValidId = { setValidId } />} />
                <Route path='/posts/post/:id' element = {<PostId validId = { validId }/>}/>
                <Route path='/error' element = {<ErrorPage/>}/>
                <Route path='*' element = {<NotFoundPage/>}/>
          </Routes>
        </MyContent>
        </>
    )
}