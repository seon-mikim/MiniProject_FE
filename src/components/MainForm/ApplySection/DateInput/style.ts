import styled from "styled-components"

export const Label = styled.label`
  color: ${({ theme }) => theme.color.darkBrown};
  font-weight:700;
`

export const Input = styled.input`
  box-sizing:border-box;
  width:100%;
  height: 40px;
  border: none;
  padding: 0 15px;
  font-size: ${({ theme }) => theme.fontSize.large};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  color: ${({ theme }) => theme.color.darkBrown};
  font-weight: 400;
  margin:10px 0 20px 0;
  &:focus{
    outline:none;
  }
`
export const CountInput = styled.input`
  width:10%;
  height: 40px;
  border: none;
  background: none;
  padding:0 0 0 5px;
  color: ${({ theme }) => theme.color.darkBrown};
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align:center;
  &:focus{
    outline:none;
  }
`