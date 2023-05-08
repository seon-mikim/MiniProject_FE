import styled from 'styled-components';

export const ConfirmModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  background-color: ${({ theme }) => theme.color.lightBeige};
  width: 450px;
  aspect-ratio: 5/3;
  border-radius: 8px;

  padding: 10px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  font-weight: ${({ theme }) => theme.fontWeight.dark};
  font-size: ${({ theme }) => theme.fontSize.base};

  filter: drop-shadow(0 1px 3px ${({ theme }) => theme.color.brown});
`;

export const ConfirmModalTitle = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.dark};
`;

export const ConfirmModalSubTitle = styled.span`
`;

export const ConfirmModalText = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  margin-top: 24px;
`;

export const ConfirmModalButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  gap: 40px;
  margin-top: 24px;

  button {
    flex: 1;
    margin: 0 8px;
  }
`;
