import React from "react";
import { BrowserRouter } from "react-router";
import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Content from "./layouts/Content";
import { ThemeProvider } from "styled-components";
import { siteColors } from "./siteColors";

function App() {
  return (
    <ThemeProvider theme={siteColors}>
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
