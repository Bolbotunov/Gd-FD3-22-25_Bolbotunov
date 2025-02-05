import React from 'react';
import { BrowserRouter } from 'react-router';
import './App.css';
import { SiteColorsProvider } from './contexts/SiteColorsContext';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Content from './layouts/Content';

function App() {
  return (
    <SiteColorsProvider>
        <BrowserRouter>
            <Header />
            <Content />
            <Footer />
        </BrowserRouter>
    </SiteColorsProvider>
  );
}

export default App;
