import { Button } from '../Button/style';
import * as S from './style';


interface AlertModalProps {
  onComfirmClick: () => void;
  title: string;
  message: string;
}

function AlertModal({ title, message, onComfirmClick }: AlertModalProps) {
  const handleClick = () => {
    onComfirmClick();
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
