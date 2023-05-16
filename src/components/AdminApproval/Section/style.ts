import styled from 'styled-components';

export const CategoryWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 15px;
  margin-bottom: 10px;
  align-items: center;
  flex: 1;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSize.base};
  span {
    width: 8%;
  }
`;
export const CradWrap = styled.div`
  height: 480px;
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
