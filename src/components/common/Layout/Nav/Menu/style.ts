import styled from "styled-components";
import theme from "../../../../../styles/theme";
interface opacityProps {
  opacity: number
}

export const flexDiv = styled.div<opacityProps>`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  transition: all 1s ease;
  width: ${(props) => props.opacity === 0 ? '3rem' : '12rem'};
  gap: 1rem;
`
export const menuDiv = styled.div<opacityProps>`
  display: flex;
  align-items: center;
  justify-content: end;
  width: ${(props) => props.opacity === 0 ? '3rem' : '12rem'};
  height: 3rem;
  padding-right: 1rem;
  background-color: ${theme.color.beige};
  clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, ${(props) => props.opacity === 0 ? '45%' : '12%'} 50%, 0% 0%);
  transition: all 1s ease;
  white-space: nowrap;
  .adminLink {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    color: ${theme.color.white};
    width: ${(props) => props.opacity === 0 ? '0' : '9rem'};
    opacity: ${(props) => props.opacity};
    transition: all 1s ease;
    white-space: nowrap;
  }
  .userLink {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr;
    text-decoration: none;
    color: ${theme.color.white};
    column-gap: 0.3rem;
    row-gap: 0.1rem;
    align-items: center;
    width: ${(props) => props.opacity === 0 ? '0' : '9rem'};
    opacity: ${(props) => props.opacity};
    transition: all 1s ease;
    white-space: nowrap;
  }
`
export const gridSpan = styled.span`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  align-self: center;
  justify-self: center;
  font-size: ${theme.fontSize.large};
  width: max-content;
` 
export const linkSpan = styled.span<opacityProps>`
  a {
    text-decoration: none;
    color: ${theme.color.white};
    opacity: ${(props) => props.opacity};
    transition: all 1s ease;
    white-space: nowrap;
    padding-left: 3rem;
  }
`
export const countSpan = styled.span`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${theme.color.whiteBeige};
  color: ${theme.color.darkBrown};
  display: flex;
  align-items: center;
  justify-content: center;
`