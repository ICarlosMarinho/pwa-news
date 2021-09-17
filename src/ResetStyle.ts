import { createGlobalStyle } from "styled-components";

const ResetStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-width: 100%;
    min-height: 100vh;
    font-family: 'Palanquin', sans-serif, Arial, Helvetica;
    padding: 0 40px;
  }
  
  h2 {
    font-family: 'Prompt', 'Gill Sans', 'Gill Sans MT', sans-serif;
  }

  h3 {
    font-family: 'Cormorant', serif;
  }
`;

export default ResetStyles;
