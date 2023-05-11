import theme from "../../../../../styles/theme";
import styled from "styled-components";

interface opacityProps {
  opacity: number
}

export const flexColumnDiv = styled.div<opacityProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => props.opacity === 0 ? '0' : '1rem'};
  box-sizing: border-box;
  gap: 0.5rem;
  padding-top: 0;
  opacity: ${(props) => props.opacity};
  height: ${(props) => props.opacity === 0 ? '0' : 'max-content'};
  transition: all 0.3s ease;
  a {
    width: 100%;
    text-decoration: none;
  }
`