import { useState } from 'react';
import Wrapper from '../../components/AdminApproval';
import { useQuery } from 'react-query';
import { getApproval } from '../../api/request';
import ConfirmModal from '../../components/common/ConfirmModal';

function AdminApprovalPage() {
  const [selectedTab, setSelectedTab] = useState<string>('request');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const { data, isLoading, error } = useQuery('/api/admin/annual/request', getApproval);
 
  const handleButtonClick = (cardData, status) => {
    setSelectedCard({ ...cardData, status });
    console.log({eventId:cardData.eventId, orderState: cardData.orderState})
    setShowModal(!showModal);
  };

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
    console.log('click:', tab);
  };

  if (isLoading) {
    return <>로딩중</>;
  }
  return (
    <div className="content">
      {showModal && (
        <ConfirmModal
          title={`이름: ${selectedCard.username}`}
          subTitle={`[${selectedCard.eventType}] ${selectedCard.startDate}`}
          textContent="해당 내용을 승인하시겠습니까?"
          // onConfirm={}

        />
      )}
      <Wrapper handleTabClick={handleTabClick} eventData={data} handleButtonClick={handleButtonClick} />
    </div>
  );
}

export default AdminApprovalPage;
