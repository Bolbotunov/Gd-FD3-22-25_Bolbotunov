import HomePage from '../pages/HomePage';
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import ContactPage from '../pages/ContactPage';
import ContactText from '../pages/ContactText';
import ContactImage from '../pages/ContactImage';
import ContactAbout from '../pages/ContactAbout';
import ContactTerms from '../pages/ContactTerms';
import PostsPage from '../pages/PostsPage';
import PostId from '../pages/PostId';
import ErrorPage from '../pages/ErrorPage';
import ErrorLayout from '../pages/ErrorLayout';
import { MyContent } from '../styles/MyContent.styled';


export default function Content () {
    return (
        <>
        <MyContent>
          <Routes>
                <Route path='/' element = {<HomePage/>}/>
                <Route path='/contact' element = {<ContactPage/>}>
                  <Route path='text' element = {<ContactText/>}/>
                  <Route path='image' element = {<ContactImage/>}/>
                </Route>
                <Route path='/contact/about' element = {<ContactAbout/>}/>
                <Route path='/contact/terms' element = {<ContactTerms/>}/>
                <Route path='/posts' element = {<PostsPage/>}/>
                <Route path='/posts/post/:id' element = {<PostId/>}/>
                <Route path='/error' element = {<ErrorLayout/>}>
                  <Route path='/error' element = {<ErrorPage/>}/>
                </Route>
                <Route path='/:id' element = {<ErrorPage/>}/>
          </Routes>
        </MyContent>
        </>
    )
}