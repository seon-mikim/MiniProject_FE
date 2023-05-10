import theme from "../../../../styles/theme";
import styled from "styled-components";

interface opacityProps {
  opacity: number
}

export const navDiv = styled.div<opacityProps>`
  box-sizing: border-box;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  padding-right: 0;
  height: 100vh;
  background-color: ${theme.color.darkBrown};
  transition: all 1s ease;
  filter: drop-shadow(0 2px 3px #3E1B11);
`
export const flexDiv = styled.div<opacityProps>`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  width: ${(props) => props.opacity === 0 ? '1rem' : '11rem'};
  height: 1rem;
  transition: all 1s ease;
`
export const titleSpan = styled.span<opacityProps>`
  color: ${theme.color.white};
  opacity: ${(props) => props.opacity};
  transition: all 1s ease;
  white-space: nowrap;
  height: 1rem;
`
export const arrowDiv = styled.div<opacityProps>`
  color: ${theme.color.white};
  cursor: pointer;
  opacity: ${(props) => props.opacity};
  transition: all 1s ease;
`
export const flexColumnDiv = styled.div<opacityProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.opacity === 0 ? '2rem' : '11rem'};
  gap: 1rem;
  opacity: ${(props) => props.opacity};
  transition: all 1s ease;
  white-space: nowrap;
  padding-right: 1rem;
`
export const flexButtonDiv = styled.div`
  display: flex;
  gap: 0.5rem;
`
export const introButton = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${theme.color.white};
  cursor: pointer;
`
export const menuButtonDiv = styled.div`
  padding-left: 1rem;
  cursor: pointer;
`