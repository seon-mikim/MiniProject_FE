import * as S from './style'
import Section from './Section'

interface funcProps  {
  handleTabClick: (tab:string) => void;
}

function Wrapper ({handleTabClick}: funcProps) {
  return (
    <S.ApprovalWrapper>
        <S.SeleteTabArea>
          <span onClick={() => handleTabClick('request')}>당직/연차 요청현황</span>
          <span onClick={() => handleTabClick('approval')}>당직/연차 승인내역</span>
        </S.SeleteTabArea>
        <Section/>
    </S.ApprovalWrapper>
  )
}

export default Wrapper