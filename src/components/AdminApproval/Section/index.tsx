import * as S from './style';
import Card from './Card';
import Pagenation from './Pagenation';
import CheckWrapper from './CheckWrapper';
import {  SectionProps } from '../../../interface/Admin';




function Section({
  handleButtonClick,
  handleEventTypeSelect,
  handleSetPage,
  handleSelectType,
  handleSearchClick,
  eventType,
  breakdownType,
  data,
  pageTotalNumber,
  currentPageNumber,
}: SectionProps) {


  return (
    <S.SectionWrap>
      <CheckWrapper
        handleEventTypeSelect={handleEventTypeSelect}
        handleSelectType={handleSelectType}
        handleSearchClick={handleSearchClick}
      />
      <S.CategoryWrap>
        <span>사원 정보</span>
        <span>신청</span>
        <span>요청 기간</span>
        <span>신청일</span>
        <span>요청 처리</span>
      </S.CategoryWrap>
      <S.CradWrap>
        {data&&data.length === 0 && <S.Epmty>요청 내역이 없습니다.</S.Epmty>}
        {eventType === 'annual' &&
          data &&
          data.map((eData: any) => (
            <Card
              eData={eData}
              key={eData.eventId}
              handleButtonClick={handleButtonClick}
              breakdownType={breakdownType}
            />
          ))}
        {eventType === 'duty' &&
          data &&
          data.map((eData) => (
            <Card
              eData={eData}
              key={eData.eventId}
              handleButtonClick={handleButtonClick}
              breakdownType={breakdownType}
            />
          ))}
      </S.CradWrap>
      <Pagenation handleSetPage={handleSetPage} pageTotalNumber={pageTotalNumber} currentPageNumber={currentPageNumber}/>
    </S.SectionWrap>
  );
}

export default Section;
