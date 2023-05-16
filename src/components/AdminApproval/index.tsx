import * as S from './style';
import Section from './Section';
import { eventProps } from './Section/Card';

export interface Props {
  handleTabClick?: (breakDown: string) => void;
  handleButtonClick?: (cardData: eventProps['eData'], status: string) => void;
  handleRequestSelect?: (eventType: string) => void;
  handleSetPage?: (pageNumber: number) => void;
  handleSelectType?: (type: string) => void;
  handleInput?: (keyword: string) => void;
  handleModalOpen?: () => void;
  eventData?: any;
  eventType?: string;
  breakdownType?: string;
  pageTotalNumber?: number;
}

function Wrapper({
  handleTabClick,
  handleButtonClick,
  handleRequestSelect,
  handleSetPage,
  handleModalOpen,
  handleSelectType,
  handleInput,
  eventData,
  eventType,
  breakdownType,
  pageTotalNumber,
}: Props) {
  return (
    <S.ApprovalWrapper>
      <S.SeleteTabArea>
        <span onClick={() => handleTabClick?.('request')}>연차/당직 요청현황</span>
        <span onClick={() => handleTabClick?.('approval')}>연차/당직 승인내역</span>
        <S.CalendarIcon onClick={handleModalOpen} />
      </S.SeleteTabArea>
      <Section
        handleButtonClick={handleButtonClick}
        handleRequestSelect={handleRequestSelect}
        handleSelectType={handleSelectType}
        handleSetPage={handleSetPage}
        handleInput={handleInput}
        eventData={eventData}
        eventType={eventType}
        breakdownType={breakdownType}
        pageTotalNumber={pageTotalNumber?? 0}
      />
    </S.ApprovalWrapper>
  );
}

export default Wrapper;
