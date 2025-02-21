import './App.css';
import ShowResult from './ShowResult';
import { Provider } from 'react-redux';
import { store } from './stores/store';
import TodosPage from './Pages/todosPage';
import { Routes, Route } from 'react-router'
import { Link } from 'react-router'
import PostsPage from './Pages/PostsPage';
import { BrowserRouter } from 'react-router';
import PostPage from './Pages/PostPage';

// import MyTestPage from './MyTestPage';
import { testStore } from './stores/testStore';


function App() {
  return (
    <>
    <Provider store = { store }>
       <BrowserRouter>
        <div className="App">
          <header className="App-header">
          <nav>
              <Link to='/posts' style={{color:'white'}}>Posts</Link>
              <br></br>
              <Link to='/todos'  style={{color:'white'}}>Todos</Link>
            </nav>
            {/* <MyTestPage/> */}
            {/* <ShowResult/> */}
            {/* <TodosPage/> */}
            <Routes>
            <Route path='/posts' element={<PostsPage />} />
              <Route path='/posts/:postId' element={<PostPage />} />
            <Route path='/todos' element={<TodosPage />} />
          </Routes>
          </header>
         
        </div>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
