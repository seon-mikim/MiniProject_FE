import styled from 'styled-components';

export const CategoryWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSize.base};
  span {
    width: 8%;
  }
`;
export const CradWrap = styled.div`
  height: 520px;
`;

export const Epmty = styled.div`
  display: flex;
  height: 550px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSize.xlarge};
`;
