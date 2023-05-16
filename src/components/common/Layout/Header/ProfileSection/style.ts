import theme from "../../../../../styles/theme";
import styled from "styled-components";

export const gridDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-template-rows: min-content min-content;
  padding: 8px;
  box-sizing: border-box;
  span {
    color: ${theme.color.white};
    justify-self: end;
  }
  column-gap: 0.5rem;
  cursor: pointer;
`
export const nameSpan = styled.span`
  color: ${theme.color.white};
  justify-self: end;
  align-self: end;
  font-size: ${theme.fontSize.xsmall};
`
export const emailSpan = styled.span`
  color: ${theme.color.white};
  justify-self: end;
  align-self: end;
  font-size: ${theme.fontSize.xsmall};
  opacity: 0.5;
`
export const emailFlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-end;
`
export const wrapperDiv = styled.div`
  grid-column: 2/3;
  grid-row: 1/3;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px dashed ${theme.color.whiteBeige};
  padding: 1px;
  align-self: center;
  justify-self: center;
  .profileImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    background-color: ${theme.color.beige};
    box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 1px 1px;
  }
`