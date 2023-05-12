import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: -400% 50%;
  }
`;

export const SkeletonUI = styled.div`
  width: inherit;
  height: inherit;
  border-radius: 8px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.color.lightBrown} 35%,
    ${({ theme }) => theme.color.lightBeige} 50%,
    ${({ theme }) => theme.color.lightBrown} 85%
  );
  background-size: 400% 100%;
  filter: opacity(15%);
  animation: ${loadingAnimation} 3s infinite;
`;
