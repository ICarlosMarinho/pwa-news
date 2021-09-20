import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    min-height: 100vh;
    font-family: 'Palanquin', sans-serif, Arial, Helvetica;
  }
  
  h2, h3 {
    font-family: 'Prompt', 'Gill Sans', 'Gill Sans MT', sans-serif;
  }

  h4 {
    font-family: 'Cormorant', serif;
  }

  #app-root {
    display: grid;
    grid-template-areas:
    "header"
    "content"
    "footer";
    grid-template-rows: 60px auto 40px;
    grid-template-columns: 100%;
    gap: 30px;
  }
`;

export default GlobalStyle;
