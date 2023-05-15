import styled from 'styled-components';

export const AlertModalContainer = styled.aside`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  background-color: ${({ theme }) => theme.color.lightBeige};
  width: 450px;
  aspect-ratio: 5/3;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  font-weight: ${({ theme }) => theme.fontWeight.bold};

  filter: drop-shadow(0 1px 3px ${({ theme }) => theme.color.brown});

  &:last-of-type {
    margin: 0;
  }
`;

export const AlertModalTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize.large};

`;
export const AlertModalMessage = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-size: ${({ theme }) => theme.fontSize.base};
`;
