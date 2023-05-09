import theme from "../../../../../../styles/theme";
import styled from "styled-components";

export const boldSpan = styled.span`
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSize.small};
  align-self: end;
`

export const smallSpan = styled.span`
  font-size: ${theme.fontSize.small};
  align-self: start;
  width: max-content;
`