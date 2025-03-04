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


function App() {
  return (
    <DateProvider>
      <ThemeProvider theme={ appColors }>
          <GlobalStyle />
          <AppContainer>
            <BrowserRouter>
              <MyHeader />
              <Content />
              <Footer />
            </BrowserRouter>
          </AppContainer>
      </ThemeProvider>
    </DateProvider>
  );
}

export default App;



