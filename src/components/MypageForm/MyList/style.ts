import styled from "styled-components";
import theme from "../../../styles/theme";

export const backgroundDiv = styled.div`
  background-color: ${theme.color.beige};
  border-radius: 10px;
  display: flex;
  /* flex-grow: 0.5; */
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
`
export const titleSpan = styled.span`
  font-size: ${theme.fontSize.xlarge};
  font-weight: ${theme.fontWeight.bold};
  padding: 1rem 2rem;
  border-bottom: 1px solid ${theme.color.brown};
`
export const contentBackgroundDiv = styled.div`
  width: 652.5px;
  height: 14rem;
  overflow-y: auto;
  margin: 1rem 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  &::-webkit-scrollbar {
    width: 0.3rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${theme.color.lightBrown};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${theme.color.lightBeige};
    border-radius: 10px;
  }
`
export const emptySpan = styled.span`
  height: 13rem;
  display: flex;
  align-items: center;
`