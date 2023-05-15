import * as S from './style'
import Card from './Card';
import Pagenation from './Pagenation';
import CheckWrapper from './CheckWrapper';


export interface Props {
  eventData: any[];
  handleButtonClick: (cardData:any, status:string) => void;
  handleRequestSelect: (eventType:string) =>  void
  eventType: string
  breakdownType:string
 
}

function Section({ eventData, handleButtonClick, handleRequestSelect, eventType, breakdownType  }: Props) {

  return (
    <div>
      <CheckWrapper  handleRequestSelect={handleRequestSelect}/>
      <S.CategoryWrap>
      <span>사원 정보</span>
      <span>신청</span>
      <span>요청 기간</span>
      <span>신청일</span>
      <span>요청 처리</span>
      </S.CategoryWrap>
  
      {eventType ==='annual' && eventData.map((eData:any) => (
        <Card eData={eData} key={eData.eventId} handleButtonClick={handleButtonClick} breakdownType={breakdownType} />
      ))}
      {eventType ==='duty' && eventData.map((eData:any) => (
        <Card eData={eData} key={eData.eventId} handleButtonClick={handleButtonClick} breakdownType={breakdownType}/>
      ))}
      
     
    
      
      <Pagenation />
    </div>
  );
}

export default Section;
