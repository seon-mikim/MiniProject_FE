import theme from "../../../../styles/theme";
import styled from "styled-components";

export const headerDiv = styled.div`
  /* position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
  border-radius: 15px; */
  display: inline-block;
  text-align: end;
  background-color: ${theme.color.darkBrown};
  transition: all 1s ease;
  filter: drop-shadow(1px 1px 3px #3E1B11);
  width: fit-content;
  position: relative;
  z-index: 2;
  cursor: pointer;
  
`