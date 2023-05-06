import styled from "styled-components";

export const Section = styled.div`
  min-width:780px;
  width:1080px;
  height:720px;
  background-color: ${({ theme }) => theme.color.beige};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  flex:1;
`