import * as S from './style'
import Card from './Card';
import Pagenation from './Pagenation';
import CheckWrapper from './CheckWrapper';

export interface Props {
  eventData: any[];
  handleButtonClick?: (cardData, status) => void;
}

function Section({ eventData, handleButtonClick  }: Props) {

  return (
    <div>
      <CheckWrapper />
      <S.CategoryWrap>
      <span>사원 정보</span>
      <span>신청</span>
      <span>요청 기간</span>
      <span>신청일</span>
      <span>요청 처리</span>
      </S.CategoryWrap>
  
      {eventData.data.map((eData:any) => (
        <Card eData={eData} key={eData.id} handleButtonClick={()=> handleButtonClick(eData)} />
      ))}
      
      <Pagenation />
    </div>
  );
}

export default Section;
