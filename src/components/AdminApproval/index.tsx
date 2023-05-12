import * as S from './style';
import Section from './Section';

export interface Props {
  handleTabClick: (tab: string) => void;
  handleButtonClick?: (cardData, status:string) => void;
  eventData: any;
}

function Wrapper({ handleTabClick,handleButtonClick, eventData }: Props) {
  
  return (
    <S.ApprovalWrapper>
      <S.SeleteTabArea>
        <span onClick={() => handleTabClick('request')}>당직/연차 요청현황</span>
        <span onClick={() => handleTabClick('approval')}>당직/연차 승인내역</span>
      </S.SeleteTabArea>
      <Section eventData={eventData} handleButtonClick={handleButtonClick}/>
    </S.ApprovalWrapper>
  );
}

export default Wrapper;
