import styled from "styled-components";
import theme from "../../../styles/theme";

export const flexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${theme.color.white};
  padding: 0.7rem 1rem;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
`