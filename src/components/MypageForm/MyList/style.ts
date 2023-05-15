import styled from "styled-components";
import theme from "../../../styles/theme";

export const backgroundDiv = styled.div`
  background-color: ${theme.color.beige};
  padding: 1.5rem 3rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 36.5rem;
`
export const titleSpan = styled.span`
  font-size: ${theme.fontSize.xlarge};
  font-weight: ${theme.fontWeight.bold};
`