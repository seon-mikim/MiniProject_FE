import { useState } from 'react';
import Wrapper from '../../components/AdminApproval';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getRequestList, postApproval } from '../../api/request';
import ConfirmModal from '../../components/common/ConfirmModal';
import { eventProps } from '../../components/AdminApproval/Section/Card';

function AdminApprovalPage() {
 
  const [eventType, setEventType] = useState<string>('annual');
  const [breakdownType, setBreakdownType] = useState<string>('request');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<eventProps['eData']>(null);

  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery(
    ['admin', eventType, breakdownType],
    () => getRequestList(eventType, breakdownType),
    {
      onSuccess: (data) => {
        console.log(data);
      },
    },
  );

  const { mutate: approval, status } = useMutation(postApproval, {
    onSuccess: () => {
      queryClient.invalidateQueries(['admin',  eventType, breakdownType]);
    },
  });
  const handleButtonClick = (cardData: eventProps['eData'], status: string) => {
    setSelectedCard({ ...cardData, status });
    setShowModal(!showModal);
  };

  const handleTabClick = (breakDown: string) => {
    setBreakdownType(breakDown)
    
  };
  const handleRequestSelect = (eventType: string) => {
    setEventType(eventType);
  };
  if (isLoading) {
    return <>로딩중</>;
  }
  return (
    <div className="content">
      {showModal && (
        <ConfirmModal
          title={`이름: ${selectedCard.userName}`}
          subTitle={`[${selectedCard.eventType==='ANNUAL'? '연차':'당직'}] ${
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
        breakdownType={breakdownType}
      />
    </div>
  );
}

export default AdminApprovalPage;
