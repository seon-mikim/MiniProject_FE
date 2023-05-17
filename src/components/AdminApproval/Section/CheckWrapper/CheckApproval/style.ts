import styled from "styled-components";

 export const ButtonWrap = styled.div `
 width: 34%;
 `

export const Button = styled.button`
  border: none;
  width: 110px;
  height: 48px;
  border-radius: 8px;
  color: ${(props) => (props.color === 'annual' ? props.theme.color.white : props.theme.color.darkBrown)};
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  background-color: ${(props) =>
    props.color === 'annual' ? props.theme.color.darkBrown : props.theme.color.whiteBeige};
`;