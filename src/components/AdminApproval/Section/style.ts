import styled from 'styled-components';

export const SectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 195px);
`

export const CategoryWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 10px;
  margin-left: 160px;
  align-items: center;
  /* flex: 1; */
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSize.base};
  span:nth-child(5){
   display: inline-block;
   margin-right: 20px;
  }
`;
export const CradWrap = styled.div`
 flex-grow: 1;
  
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
