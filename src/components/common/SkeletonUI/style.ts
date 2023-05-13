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
  width: 100%;
  height: 100%;
  border-radius: 8px;
  flex-grow: 1;
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
