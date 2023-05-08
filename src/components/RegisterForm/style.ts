import styled from 'styled-components';

export const signUpButton = styled.button`
  position: absolute;
  width: 400px;
  height: 64px;
  left: 795px;
  top: 842px;

  background: #5e463c;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const Input = styled.input<{ top: string }>`
  position: absolute;
  width: 400px;
  height: 49px;
  left: 795px;
  top: ${(props) => props.top};
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;
