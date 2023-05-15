import styled from "styled-components";

export const InputWapper = styled.span`
  display: inline-block;
  border-radius: 8px;
  background-color: ${(props) => props.theme.color.white};
  width: 587px;
  height: 48px;
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
