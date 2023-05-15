import styled from "styled-components";


export const ApprovalWapper = styled.div`

  width: 1308px;
  height: 882px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.color.beige};
`;


export const SeleteTabArea = styled.div`
  color: ${(props) => props.theme.color.darkBrown};
  font-size: ${(props) => props.theme.fontSize.xlarge};
  font-weight: ${(props) => props.theme.fontWeight.dark};
  padding-top: 26px;

  &::after {
    content: '';
    display: block;
    height: 1px;
    margin-top: 25px;
    width: 1308px;
    background-color: ${(props) => props.theme.color.darkBrown};
  }
  span:first-child {
    padding-left: 37.5px;
    margin-right: 50px;
  }
`;


