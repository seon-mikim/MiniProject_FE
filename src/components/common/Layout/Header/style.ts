import theme from "../../../../styles/theme";
import styled from "styled-components";

export const headerDiv = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
  background-color: ${theme.color.darkBrown};
  border-radius: 15px;
`