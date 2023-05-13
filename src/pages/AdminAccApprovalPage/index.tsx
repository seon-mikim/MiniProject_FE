import * as S from './style';
import { Button } from '../../components/common/Button/style';
import { useState } from 'react';
import ApprovalPending from '../../components/AccApproval/ApprovalPending';
import ApprovalResult from '../../components/AccApproval/ApprovalResult';

function AdminAccApprovalPage() {
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
      <S.Section className="content">
        <S.SectionHeaderWrapper>
          <S.SectionHeader>계정 승인 현황</S.SectionHeader>
          <S.Divider />
          <S.TapMenus>
            <Button variant={tapToPending ? 'lightBrown' : 'darkBrown'} onClick={handleToPending}>
              대기
            </Button>
            <Button variant={!tapToPending ? 'lightBrown' : 'darkBrown'} onClick={handleToResult}>
              승인
            </Button>
          </S.TapMenus>
        </S.SectionHeaderWrapper>
        {tapToPending ? <ApprovalPending /> : <ApprovalResult />}
      </S.Section>
    </>
  );
}

export default AdminAccApprovalPage;
