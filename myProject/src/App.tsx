import './App.css';
import Header from './components/layouts/Header';
import { BrowserRouter } from 'react-router';
import Content from './components/layouts/Content';
import Footer from './components/layouts/Footer';
import { AppContainer } from './styles/Common.styled';
import { GlobalStyle } from './styles/GlobalStyles';
import { DateProvider } from './contexts/DateContext';
import { Provider } from 'react-redux';
import './config/firebase';
import store from './store/store';
import { CustomThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <DateProvider>
      <Provider store={store}>
        <CustomThemeProvider>
          <GlobalStyle />
          <AppContainer>
            <BrowserRouter>
              <Header />
              <Content />
              <Footer />
            </BrowserRouter>
          </AppContainer>
        </CustomThemeProvider>
      </Provider>
    </DateProvider>
  );
}

export default App;
