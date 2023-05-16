import theme from "../../../../../styles/theme"
import styled from "styled-components"

export const allDiv = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  span {
    border-bottom: 1px solid ${theme.color.darkBrown};
  }
`
export const titleDiv = styled.div`
  align-self: center;
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSize.large};
`
export const flexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const wrapperDiv = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: 1px dashed ${theme.color.darkBrown};
  padding: 1px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    background-color: ${theme.color.beige};
    box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 1px 1px;
  }
`
export const contentA = styled.a`
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: ${theme.color.darkBrown};
  gap: 5px;
`