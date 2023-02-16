import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body {
    font-family: "Roboto", sans-serif;
    color: #333;
    background-color: #ffffff;
  }

  h1,
  h2,
  h3 {
    margin: none;
  }

  button, 
  input {
    color: #333;
  }
`;

export default GlobalStyles;
