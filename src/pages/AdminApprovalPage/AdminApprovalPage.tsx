import { useState } from 'react';
import Wrapper from '../../components/AdminApproval';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getRequestList, postApproval } from '../../api/request';
import ConfirmModal from '../../components/common/ConfirmModal';
import { eventProps } from '../../components/AdminApproval/Section/Card';
import BigCalendar from '../../components/common/BigCalendar';
import * as S from './style';

function AdminApprovalPage() {
  const [eventType, setEventType] = useState<string>('annual');
  const [pageNumber, setPageNumber] = useState<number >(1);
  const [type, setType] = useState<string>('username');
  const [keyword, setKeyword] = useState<string>('');
  const [breakdownType, setBreakdownType] = useState<string>('request');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<eventProps['eData']>(null);

  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery(
    ['admin', eventType, breakdownType, pageNumber, type,keyword],
    () => getRequestList(eventType, breakdownType, pageNumber, type, keyword),
    {
    
      onSuccess: (data) => {
        console.log(data);
      },
    },
  );

  const { mutate: approval, status } = useMutation(postApproval, {
    onSuccess: () => {
      queryClient.invalidateQueries(['admin', eventType, breakdownType, pageNumber, type,keyword]);
    },
  });
  const handleButtonClick = (cardData: eventProps['eData'], status: string) => {
    setSelectedCard({ ...cardData, status });
    setShowModal(!showModal);
  };

  const handleTabClick = (breakDown: string) => {
    setBreakdownType(breakDown);
  };
  const handleRequestSelect = (eventType: string) => {
    setEventType(eventType);
  };

  const handleSetPage = (pageNumber: number) => {
    setPageNumber(pageNumber);
  };
  const handleModalClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setIsShowModal(false);
  };

  const handleModalOpen = () => {
    setIsShowModal(true);
  };

  const handleSelectType = (type: string) => {
    setType(type);
  };

  const handleInput = (keyword: string) => {
    setKeyword(keyword);
  };

  if (isLoading) {
    return <>로딩중</>;
  }
  return (
    <div className="content large">
      {isShowModal && (
        <S.ModalBackground onClick={handleModalClose}>
          <BigCalendar />
        </S.ModalBackground>
      )}
      {showModal && (
        <ConfirmModal
          title={`이름: ${selectedCard.userName}`}
          subTitle={`[${selectedCard.eventType === 'ANNUAL' ? '연차' : '당직'}] ${
            selectedCard.startDate ? selectedCard.startDate : selectedCard.date
          }`}
          textContent="해당 내용을 승인하시겠습니까?"
          onConfirm={() => {
            approval({
              eventType: selectedCard.eventType.toLowerCase(),
              eventId: selectedCard.eventId,
              orderState: selectedCard.status,
            });
            setShowModal((prev) => !prev);
          }}
          onCancel={() => setShowModal(!showModal)}
        />
      )}
      <Wrapper
        handleTabClick={handleTabClick}
        handleRequestSelect={handleRequestSelect}
        eventData={data.data.content}
        handleButtonClick={handleButtonClick}
        eventType={eventType}
        handleSetPage={handleSetPage}
        breakdownType={breakdownType}
        pageTotalNumber={data.data.totalElements}
        handleModalOpen={handleModalOpen}
        handleSelectType={handleSelectType}
        handleInput={handleInput}
      />
    </div>
  );
}

export default AdminApprovalPage;
