import styled from 'styled-components';

export const selectMenuBox = styled.div`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 16px 50.5px;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSize.base};
  background-color: ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.darkBrown};
  margin-left: 30px;
  margin-right: 30px;
`;

export const SelectDropBox = styled.div`
  height: 36px;
  margin-left: 30px;
  padding: 15px 45.5px;
  display: inline-block;
  text-align: center;
`;
