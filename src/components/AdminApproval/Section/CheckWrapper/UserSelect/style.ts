import styled from 'styled-components';

export const selectMenuBox = styled.div`
  border-radius: 8px;
  padding: 16px 35px;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSize.base};
  background-color: ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.darkBrown};
  margin-left: 30px;
  margin-right: 30px;
  div {
    width: 77px;
    text-align: center;
  }
`;

export const SelectDropBoxWrap = styled.div`
  height: 30px;
  margin-left: 30px;
  display: inline-block;
  text-align: center;
`;

export const DropBoxContainer = styled.div`
position: relative;
  width: 77px;
  height: 55px;
  padding: 9px 35px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.white};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSize.base};
  border-radius: 0 0 8px 8px;
  bottom: 5px;
  div {
    margin: 5px auto;
    padding-top: 5px;
    z-index: 1;
  }
`;
