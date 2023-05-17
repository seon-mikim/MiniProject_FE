import styled from 'styled-components';

export const InputWapper = styled.span`
  position: relative;
  display: inline-block;
  border-radius: 8px;
  background-color: ${(props) => props.theme.color.white};
  width: 100%;
  height: 48px;
  button:first-child {
    position: absolute;
    right: 60px;
    top: 12px;
  }
  button:nth-child(2) {
    position: absolute;
    right: 20px;
    top: 12px;
  }
  input {
    width: 500px;
    height: 43px;
    border: 1px solid transparent;
    margin-left: 10px;
    padding-left: 10px;
    font-size: ${(props) => props.theme.fontSize.base};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    &:focus {
      outline: none;
      border-color: none;
    }
  }
`;
