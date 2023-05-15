// import theme from "../../../../../styles/theme";
import styled from "styled-components";
import theme from "../../../../../styles/theme";

interface opacityProps {
  opacity: number
}

export const flexColumnDiv = styled.div<opacityProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => props.opacity === 0 ? '0' : '0.7rem'};
  box-sizing: border-box;
  gap: 0.3rem;
  padding-top: 0;
  opacity: ${(props) => props.opacity};
  height: ${(props) => props.opacity === 0 ? '0' : 'max-content'};
  transition: all 0.3s ease;
  a {
    width: 100%;
    text-decoration: none;
  }
`
export const annualCountSpan = styled.span<opacityProps>`
  color: ${theme.color.white};
  margin-bottom: 0.3rem;
  pointer-events: ${(props) => props.opacity === 0 ? 'none' : 'auto'};
`