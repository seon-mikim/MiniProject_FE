import styled from 'styled-components';

export const Input = styled.input<{ top: string }>`
  position: absolute;
  width: 400px;
  height: 64px;
  left: 776px;
  top: ${(props) => props.top};
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const Button = styled.button<{ top: string; background: string }>`
  position: absolute;
  width: 400px;
  height: 64px;
  left: 776px;
  top: ${(props) => props.top};
  background: ${(props) => props.background};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;
