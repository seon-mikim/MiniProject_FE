import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyled = createGlobalStyle`
  ${reset}
  :root{
    font-size: 18px;
    font-weight: 400;
    font-family: 'Noto Sans', sans-serif;
  }
  body{
    height:100vh;
    color:#452E27;
    background-color:#EBE4DE;
  }
  .rbc-overlay{
    background-color:skyblue;
    z-index: 100;
    .rbc-event{
      background-color: #fff;
      color:#000;
    }
  }
`;
