import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyled = createGlobalStyle`
  ${reset}
  :root{
    font-size: 18px;
    font-weight: 400;
    font-family: 'Noto Sans', sans-serif;
    color:#181818,
  }
  body{
    height:100vh;
    background-color:#EBE4DE;
  }
`;
