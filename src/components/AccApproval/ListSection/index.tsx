import * as S from '../style';
import { useState } from 'react';
import ApprovalPending from '../ApprovalPending';
import ApprovalResult from '../ApprovalResult';
import { Button } from '../../common/Button/style';
import { NavButton } from '../../MainForm/AnnualSection/style';
import theme from '../../../styles/theme';

function toggleColor(isSelected: boolean) {
  if (isSelected) {
    return {
      backgroundColor: `${theme.color.darkBrown}`,
      color: `${theme.color.white}`,
    };
  } else {
    return {
      backgroundColor: `${theme.color.whiteBeige}`,
      color: `${theme.color.darkBrown}`,
    };
  }
}

function ListSection() {
  const [tapToPending, setTapToPending] = useState<boolean>(true);
  const handleToPending = () => {
    if (tapToPending) return;
    setTapToPending(true);
  };
  const handleToResult = () => {
    if (!tapToPending) return;
    setTapToPending(false);
  };
  return (
    <>
      <S.TapMenus>
        <NavButton style={{ ...toggleColor(tapToPending) }} onClick={handleToPending}>
          대기
        </NavButton>
        <NavButton style={{ ...toggleColor(!tapToPending) }} onClick={handleToResult}>
          승인
        </NavButton>
      </S.TapMenus>
      {tapToPending ? <ApprovalPending /> : <ApprovalResult />}
    </>
  );
}

export default ListSection;
