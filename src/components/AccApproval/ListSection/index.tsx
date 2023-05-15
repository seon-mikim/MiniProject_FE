import * as S from '../style'
import { useState } from 'react';
import ApprovalPending from '../ApprovalPending';
import ApprovalResult from '../ApprovalResult';
import { Button } from '../../common/Button/style';


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
        <Button variant={tapToPending ? 'lightBrown' : 'darkBrown'} onClick={handleToPending}>
          대기
        </Button>
        <Button variant={!tapToPending ? 'lightBrown' : 'darkBrown'} onClick={handleToResult}>
          승인
        </Button>
      </S.TapMenus>
      {tapToPending ? <ApprovalPending /> : <ApprovalResult />}
    </>
  );
}

export default ListSection;
