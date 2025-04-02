import './App.css';
import Header from './components/layouts/Header';
import { BrowserRouter } from 'react-router';
import Content from './components/layouts/Content';
import Footer from './components/layouts/Footer';
import { AppContainer } from './styles/Common.styled';
import { GlobalStyle } from './styles/GlobalStyles';
import { DateProvider } from './contexts/DateContext';
import { Provider } from 'react-redux';
import './firebase/firebase';
import store from './store/store';
import { CustomThemeProvider } from './contexts/ThemeContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <CustomThemeProvider>
      <DateProvider>
        <Provider store={store}>
          <GlobalStyle />
          <AppContainer>
            <BrowserRouter>
              <Header />
              <Content />
              <Footer />
              <ToastContainer
                position='top-right'
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
                draggable
                pauseOnFocusLoss
              />
            </BrowserRouter>
          </AppContainer>
        </Provider>
      </DateProvider>
    </CustomThemeProvider>
  );
}
