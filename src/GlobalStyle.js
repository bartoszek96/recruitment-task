import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
 
const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto;
  }

  body {
    overflow-x: hidden;
  }
`;
 
export default GlobalStyle;
