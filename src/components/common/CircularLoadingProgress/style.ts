import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const CircularLoadingProgress = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.color.brown};
  animation: ${spinAnimation} 0.8s linear infinite;
`;