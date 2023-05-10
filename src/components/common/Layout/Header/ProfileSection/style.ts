import theme from "../../../../../styles/theme";
import styled from "styled-components";

export const gridDiv = styled.div`
  display: grid;
  grid-template-columns: 8rem 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 1rem;
  box-sizing: border-box;
  span {
    color: ${theme.color.white};
    justify-self: end;
  }
  gap: 0.5rem;
`
export const nameSpan = styled.span`
  color: ${theme.color.white};
  justify-self: end;
  align-self: end;
`
export const emailSpan = styled.span`
  color: ${theme.color.white};
  justify-self: end;
  align-self: start;
`
export const wrapperDiv = styled.div`
  grid-column: 2/3;
  grid-row: 1/3;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: 1px dashed ${theme.color.whiteBeige};
  padding: 1px;
  align-self: center;
  justify-self: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`