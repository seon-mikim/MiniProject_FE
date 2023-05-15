import styled from "styled-components";
import theme from "../../../styles/theme";

export const backgroundDiv = styled.div`
  background-color: ${theme.color.beige};
  padding: 1.5rem 3rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const titleSpan = styled.span`
  font-size: ${theme.fontSize.xlarge};
  font-weight: ${theme.fontWeight.bold};
`
export const flexForm = styled.form`
  display: grid;
  grid-template-columns: 13rem 23rem minmax(10rem, 40rem);
  grid-template-rows: 1fr;
  gap: 2rem;
`
export const imgSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  input {
    display: none;
  }
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    width: 6rem;
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    background-color: ${theme.color.whiteBeige};
    color: ${theme.color.darkBrown};
    border-radius: 7px;
    &:hover {
      opacity: 0.9;
    }
  }
`
export const wrapperDiv = styled.div`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  border: 3px dashed ${theme.color.whiteBeige};
  padding: 2px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`
export const formDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 0.5rem;
`
export const formListDiv = styled.div`
  display: grid;
  grid-template-columns: 6rem 20rem;
  grid-template-rows: 1fr 1fr;
  gap: 0.2rem;
  p {
    grid-column: 2/3;
    color: ${theme.color.darkBrown};
    font-weight: ${theme.fontWeight.bold};
  }
  input {
    border: none;
    border-radius: 5px;
    padding: 0.2rem;
    width: 17rem;
    font-size: ${theme.fontSize.base};
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.2);
  }
  label {
    font-weight: ${theme.fontWeight.bold};
  }
`
export const changeButton = styled.button`
  align-self: end;
  justify-self: end;
  width: 10rem;
  height: min-content;
  padding: 0.5rem;
  cursor: pointer;
  background-color: ${theme.color.lightBrown};
  color: ${theme.color.white};
  border-radius: 7px;
  border: none;
  font-size: ${theme.fontSize.base};
  box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.2);
  &:hover {
    opacity: 0.9;
  }
`