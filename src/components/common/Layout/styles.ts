// import theme from "../../../styles/theme";
import styled from 'styled-components';

export const gridDiv = styled.div`
  /* display: grid;
  grid-template-columns: 4rem 1fr;
  grid-template-rows: 6rem 1fr;
  header {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    align-self: center;
    justify-self: end;
  }
  nav {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    transition: all 1s ease;
  }
  .content {
    align-self: center;
    justify-self: center;

    display: flex;
    flex-wrap: wrap;

    align-content: center;
    justify-content: center;

    padding: 1rem;
  }

  .mypage {
    gap: 1rem;
  } */

  display: grid;
  grid-template-columns: 72px 1fr;
  grid-template-rows: 80px 1fr;
  width: 100vw;
  height: 100vh;
  grid-template-areas:
    'nav header'
    'nav content';

  box-sizing:border-box;

  nav {
    grid-area: nav;

  }

  header {
    grid-area: header;
    /* background-color: #224230; */
    padding: 10px 190px;
    text-align: end;
  }

  .content {
    grid-area: content;
    padding: 30px 190px;
    width: calc(100vw - 452px);
    height: calc(100vh - 160px);
  }

  .content.large {
    grid-area: content;
    padding: 0 190px;
    width: calc(100vw - 452px);
    height: calc(100vh - 100px);
  }


`;
