import { ReactNode } from 'react';
import { Button } from '../Button/style';
import * as S from './style';


interface AlertModalProps {
  onConfirmClick: () => void;
  title?: string;
  message?: ReactNode;
}

function AlertModal({ title, message, onConfirmClick }: AlertModalProps) {
  const handleClick = () => {
    onConfirmClick();
  };

  return (
    <S.AlertModalContainer>
      <S.AlertModalTitle>{title && title}</S.AlertModalTitle>
      <S.AlertModalMessage>{message && message}</S.AlertModalMessage>
      <Button size="md" variant="darkBrown" onClick={handleClick}>
        확인
      </Button>
    </S.AlertModalContainer>
  );
}

export default AlertModal;
