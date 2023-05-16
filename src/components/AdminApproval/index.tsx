import * as S from './style';
import Section from './Section';
import { Props } from '../../interface/Admin';


function Wrapper({
  handleTabClick,
  handleButtonClick,
  handleEventTypeSelect,
  handleSetPage,
  handleModalOpen,
  handleSelectType,
  handleInput,
  data,
  eventType,
  breakdownType,
  pageTotalNumber,
  currentPageNumber,

}: Props) {
  return (
    <S.ApprovalWrapper>
      <S.SeleteTabArea>
        <span onClick={() => handleTabClick('request')}>연차/당직 요청현황</span>
        <span onClick={() => handleTabClick('approval')}>연차/당직 승인내역</span>
        <S.CalendarIcon onClick={handleModalOpen} />
      </S.SeleteTabArea>
      <Section
        handleButtonClick={handleButtonClick}
        handleEventTypeSelect={handleEventTypeSelect}
        handleSelectType={handleSelectType}
        handleSetPage={handleSetPage}
        handleInput={handleInput}
        data={data}
        eventType={eventType}
        breakdownType={breakdownType}
        pageTotalNumber={pageTotalNumber?? 0}
        currentPageNumber={currentPageNumber}
      />
    </S.ApprovalWrapper>
  );
}

export default Wrapper;
