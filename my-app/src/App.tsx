import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./Pages/HomePage";
import { Bounce, ToastContainer } from "react-toastify";
import './App.css';
import TestPage from "./Pages/TestPage";
import DynamicPage from "./Pages/DynamicPage";
import ExternalPage from "./Pages/ExternalPage";
import Canvas from './components/Canvas';
import CounterComponent from './components/CounterComponent';
import { NameProvider } from "./contexts/nameContext";
import { ColorThemeProvider } from "./contexts/themeContext";
import { Header } from "./components/layout/Header";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Notes from "./components/Notes";
import TodosPage from "./Pages/TodosPage";
import TodosPageFilterVariant2 from "./Pages/TodosPageFilterVariant2";
import PostsPage from "./Pages/PostsPage";
import PostPage from "./Pages/PostPage";


function App() {
  // const [name, setName] = useState('');

  return (
    <NameProvider>
      <ColorThemeProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/todos" element={<TodosPage />} />

            <Route path="/posts" element={<PostsPage />} />
            <Route path="/posts/:postId" element={<PostPage />} />

            <Route path="/todosFilterVariant2" element={<TodosPageFilterVariant2 />} />
            <Route path="/dynamic/:id/courses/:courseId" element={<DynamicPage />} />
            <Route path="/external" element={<ExternalPage />}>
              <Route path="canvas" element={<Canvas />} />
              <Route path="notes" element={<Notes/>} />
              <Route path="counter" element={<CounterComponent />} />
            </Route>
          </Routes>

          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </BrowserRouter>
      </Provider>
      </ColorThemeProvider>
    </NameProvider>
  );
}

export default App;