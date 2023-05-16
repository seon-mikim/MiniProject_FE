import styled from "styled-components";
import theme from "../../../../styles/theme";

export const cancelButton = styled.button`
  background-color: ${theme.color.whiteBeige};
  font-size: ${theme.fontSize.base};
  border: none;
  border-radius: 5px;
  padding: 0.4rem;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  };
`