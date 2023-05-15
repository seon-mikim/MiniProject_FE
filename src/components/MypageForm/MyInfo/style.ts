import styled from "styled-components";
import theme from "../../../styles/theme";

export const backgroundDiv = styled.div`
  background-color: ${theme.color.beige};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`
export const titleSpan = styled.span`
  font-size: ${theme.fontSize.xlarge};
  font-weight: ${theme.fontWeight.bold};
  padding: 1rem 2rem;
  border-bottom: 1px solid ${theme.color.brown}
`
export const flexForm = styled.form`
  display: grid;
  grid-template-columns: 13rem 23rem minmax(10rem, 23rem);
  grid-template-rows: 1fr;
  gap: 3rem;
  padding: 1rem 2rem;
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
  width: 10rem;
  height: 10rem;
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
  grid-template-columns: 7rem 20rem;
  grid-template-rows: 1fr 0.7fr;
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
    align-self: center;
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