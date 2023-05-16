import * as S from './style';
import Card from './Card';
import Pagenation from './Pagenation';
import CheckWrapper from './CheckWrapper';
import { Props } from '..';

function Section({
  eventData,
  handleButtonClick,
  handleRequestSelect,
  eventType,
  breakdownType,
  handleSetPage,
  pageTotalNumber,
handleSelectType,
handleInput
}: Props) {
  return (
    <div>
      <CheckWrapper handleRequestSelect={handleRequestSelect} handleSelectType={handleSelectType} handleInput={handleInput} />
      <S.CategoryWrap>
        <span>사원 정보</span>
        <span>신청</span>
        <span>요청 기간</span>
        <span>신청일</span>
        <span>요청 처리</span>
      </S.CategoryWrap>
      <S.CradWrap>
        {eventData.length === 0
         &&
        <S.Epmty>
          요청 내역이 없습니다. 
        </S.Epmty>

        }
        {eventType === 'annual' && eventData&&
          eventData.map((eData: any) => (
            <Card
              eData={eData}
              key={eData.eventId}
              handleButtonClick={handleButtonClick}
              breakdownType={breakdownType}
            />
          ))}
        {eventType === 'duty' &&eventData&&
          eventData.map((eData: any) => (
            <Card
              eData={eData}
              key={eData.eventId}
              handleButtonClick={handleButtonClick}
              breakdownType={breakdownType}
            />
          ))}
      </S.CradWrap>
      <Pagenation handleSetPage={handleSetPage} pageTotalNumber={pageTotalNumber} />
    </div>
  );
}

export default Section;
