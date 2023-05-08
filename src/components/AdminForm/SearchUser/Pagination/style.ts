import styled, { css } from "styled-components";


export const buttonStyles = css`
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 8px;
  margin: 0 2px;
  font-size: 16px;
  &:hover {
    background-color: #eee;
  }
  &:disabled {
    cursor: not-allowed;
    color: #ccc;
    background-color: transparent;
    &:hover {
      background-color: transparent;
    }
  }
`;

export const ArrowButton = styled.button`
  ${buttonStyles}
`;

export const Dots = styled.span`
  padding: 8px;
  margin: 0 2px;
  font-size: 16px;
`;

export const PageButton = styled.button<{ isActive: boolean }>`
  ${buttonStyles}
  ${({ isActive }) =>
    isActive &&
    css`
      font-weight: bold;
      background-color: #eee;
    `}
`;
