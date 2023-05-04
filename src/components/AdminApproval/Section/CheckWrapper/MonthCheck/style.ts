import styled from "styled-components";
export const Month = styled.div`
  margin-left: 37.5px;
  border-radius: 8px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 65px;
  padding-left: 65px;
  background-color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;