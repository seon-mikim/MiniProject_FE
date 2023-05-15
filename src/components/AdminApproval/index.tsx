import * as S from './style';
import Section from './Section';
import { eventProps } from './Section/Card';

export interface Props {
  handleTabClick: (breakDown: string) => void;
  handleButtonClick: (cardData:eventProps['eData'], status:string) => void;
  handleRequestSelect: (eventType:string) =>  void
  eventData: any;
  eventType: string
  breakdownType: string
}

function Wrapper({ handleTabClick,handleButtonClick, eventData, handleRequestSelect, eventType, breakdownType }: Props) {
  console.log('wrapper', eventData)
  return (
    <S.ApprovalWrapper>
      <S.SeleteTabArea>
        <span onClick={() => handleTabClick('request')}>연차/당직 요청현황</span>
        <span onClick={() => handleTabClick('approval')}>연차/당직 승인내역</span>
      </S.SeleteTabArea>
      <Section eventData={eventData} handleButtonClick={handleButtonClick} handleRequestSelect={handleRequestSelect} eventType={eventType} breakdownType={breakdownType}/>
    </S.ApprovalWrapper>
  );
}

export default Wrapper;
