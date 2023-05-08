import styled from "styled-components";

export const List = styled.li`
  background-color: ${({ theme }) => theme.color.white};
  display:flex;
  align-items:center;
  padding: 15px 20px;
  border-radius: 8px;
  margin-bottom:10px;
`

export const UserImg = styled.img`
  width:52px;
  height:52px;
  border-radius:50%;
  background-color: ${({ theme }) => theme.color.darkBrown};
`