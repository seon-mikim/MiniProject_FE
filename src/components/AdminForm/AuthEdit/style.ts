import styled from 'styled-components';

export const AuthEditSection = styled.section`
  background-color: ${({ theme }) => theme.color.beige};
  min-width: 300px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  padding: 15px;
  border-radius: 8px;
`;
export const AuthEditHeader = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.dark};
  font-size: ${({ theme }) => theme.fontSize.large};
  margin-top: 0;
  &::after {
    content: '';
    display: block;
    margin-top: 35px;
  }
`;

export const SubHeader = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.dark};
  `;

export const TextContent = styled.p`
  margin-top: 16px;
  box-sizing: border-box;
  width: 100%;
  height: 38px;
  text-shadow: 0 0.1px 1px ${({ theme }) => theme.color.brown};
  background-color: ${({ theme }) => theme.color.white};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding: 10px 8px;
  border-radius: 8px;
  filter: drop-shadow(0 2px 1px ${({ theme }) => theme.color.brown});
`;

export const SelectedUserImg = styled.img`
  width: 110px;
  aspect-ratio: 1/1;
  right: 20px;
  top: 20px;
  position: absolute;
  border-radius: 50%;
  object-fit: cover;
`;

export const AuthControlContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  text-shadow: 0 0.1px 1px ${({ theme }) => theme.color.brown};
`;

export const RadioCard = styled.label`
  background-color: ${({ theme }) => theme.color.white};
  padding: 15px 25px;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
`;

export const RadioInput = styled.input.attrs({ type: 'radio' })`
  width: 15px;
  height: 15px;
  border: none;
  margin-right: 10px;
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.color.darkBrown},
    inset 0 0 0 3px ${({ theme }) => theme.color.white};
  border-radius: 50%;
  appearance: none;
  outline: none;
  transition: background-color 0.3s ease-in-out;
  &:checked {
    background-color: ${({ theme }) => theme.color.darkBrown};
  }
`;


