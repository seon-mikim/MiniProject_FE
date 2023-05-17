import Wrapper from '../../components/AdminApproval';
import BigCalendar from '../../components/common/BigCalendar';
import ConfirmModal from '../../components/common/ConfirmModal';
import { useAdminApproval } from '../../utils/eventHandler';
import * as S from './style'
function AdminApprovalPage() {
  const {
    eventType,
    showModal,
    isShowModal,
    selectedCard,
    handleButtonClick,
    handleTabClick,
    handleModalClose,
    handleSetPage,
    handleModalOpen,
    breakdownType,
    handleEventTypeSelect,
    handleSelectType,
    handleSearchClick,
    data,
    isLoading,
    error,
    
    approval,
    setShowModal,
  } = useAdminApproval();

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
      {showModal && selectedCard &&(
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
              orderState: selectedCard.orderState,
            });
            setShowModal((prev) => !prev);
          }}
          onCancel={() => setShowModal(!showModal)}
        />
      )}
      <Wrapper
        eventType={eventType}
        breakdownType={breakdownType}
        handleButtonClick={handleButtonClick}
        handleTabClick={handleTabClick}
        handleSetPage={handleSetPage}
        handleSelectType={handleSelectType}
        handleSearchClick={handleSearchClick}
        handleEventTypeSelect={handleEventTypeSelect}
        data={data && data.data.content}
        handleModalOpen={handleModalOpen}
        pageTotalNumber={data && data.data.totalElements}
        currentPageNumber={data&& data.data.number}
      />
    </div>
  );
}

export default AdminApprovalPage;
