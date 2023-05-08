import theme from "../../../styles/theme";
import styled from "styled-components";

export const gridDiv = styled.div`
  display: grid;
  grid-template-columns: 3rem 1fr;
  grid-template-rows: 3rem 1fr;
  header {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    align-self: center;
    justify-self: end;
  }
  nav {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    align-self: center;
    justify-self: center;
  }
  .content {
    align-self: center;
    justify-self: center;

    display: flex;
    flex-wrap: wrap;

    padding: 1rem;
  }
`