// globalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100%;
    background-image: url('/bg1.avif');
    background-size: cover;
    background-position: center 10%;
    background-repeat: no-repeat;
    min-height: 100vh;
    background-attachment: fixed;
  }
`;


