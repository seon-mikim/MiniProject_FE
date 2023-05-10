import theme from "../../../../styles/theme";
import styled from "styled-components";

export const logoutButton = styled.button`
  background-color: ${theme.color.lightBrown};
  color: ${theme.color.white};
  border-radius: 10px;
  padding: 0.5rem;
  width: 100%;
  font-weight: ${theme.fontWeight.bold};
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`

export const mypageButton = styled.button`
  background-color: ${theme.color.lightBeige};
  color: ${theme.color.darkBrown};
  border-radius: 10px;
  padding: 0.5rem;
  width: 100%;
  font-weight: ${theme.fontWeight.bold};
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`