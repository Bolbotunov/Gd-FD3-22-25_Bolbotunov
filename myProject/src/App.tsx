import './App.css';
import MyHeader from './components/layouts/MyHeader';
import { BrowserRouter, Route, Routes } from 'react-router';
import Content from './components/layouts/Content';
import Footer from './components/layouts/Footer';
import { AppContainer } from './styles/Common.styled';
import { ThemeProvider } from 'styled-components';
import { appColors } from './styles/AppColors';
import { GlobalStyle } from './styles/GlobalStyles';
import { DateProvider } from './contexts/DateContext';
import { Provider } from 'react-redux'
import './config/firebase'
import store from './store/store';
import AuthCheck from './components/authorization/AuthCheck';


function App() {
  return (
    <DateProvider>
      <Provider store={ store }>
        <ThemeProvider theme={ appColors }>
          <GlobalStyle />
          <AppContainer>
            <BrowserRouter>
              <MyHeader />
              {/* <AuthCheck> */}
              <Content />
              {/* </AuthCheck> */}
              <Footer />
            </BrowserRouter>
          </AppContainer>
        </ThemeProvider>
      </Provider>
    </DateProvider>
  );
}

export default App;



