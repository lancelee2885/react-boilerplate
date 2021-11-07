import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
  }

  body.fontLoaded {
    font-family: 'Source Sans Pro', sans-serif;;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Source Sans Pro', sans-serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
