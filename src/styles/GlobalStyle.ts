import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
  }
  *{
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
    user-select: none;
  }
`;

export default GlobalStyle;