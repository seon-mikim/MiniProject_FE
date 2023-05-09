import { Button } from '../Button/style';
import * as S from './style';


interface ConfirmModalProps {
  title: string;
  subTitle: string;
  textContent: string;

  onConfirm?: () => void;
  onCancel?: () => void;
}

function ConfirmModal({ title, subTitle, textContent, onConfirm, onCancel }: ConfirmModalProps) {
  const handleConfirm = () => {
    if (onConfirm) onConfirm();
  };
  const handleCancel = () => {
    if (onCancel) onCancel();
  };

  return (
    <S.ConfirmModalContainer>
      <S.ConfirmModalTitle>{title}</S.ConfirmModalTitle>
      <S.ConfirmModalSubTitle>{subTitle}</S.ConfirmModalSubTitle>
      <S.ConfirmModalText>{textContent}</S.ConfirmModalText>
      <S.ConfirmModalButtonContainer>
        <Button size="md" variant="darkBrown" onClick={handleConfirm}>
          확인
        </Button>
        <Button size="md" variant="lightBrown" onClick={handleCancel}>
          취소
        </Button>
      </S.ConfirmModalButtonContainer>
    </S.ConfirmModalContainer>
  );
}

export default ConfirmModal;
