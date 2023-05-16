import { useMutation, useQueryClient } from 'react-query'
import { cancelEventType, eventState } from '../../../../interface/User'
import * as S from './style'
import { cancelEvent } from '../../../../api/mypage'
import { useState } from 'react'
import ConfirmModal from '../../../common/ConfirmModal'

function CancelButton({eventEl, eventState}: {eventEl: cancelEventType, eventState: eventState}) {
  const queryClient = useQueryClient()
  const {mutate, isLoading, error} = useMutation(cancelEvent, {
    onSuccess: () => {
      queryClient.invalidateQueries(eventEl.eventType)
    }
  })
  
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);

  const isCancled = () => {
    mutate(eventEl)
  }
  console.log(isConfirmModalOpen)

  if(isLoading) return <>로딩 중...</>
  if(error) return <>에러...</>
  return (
    <>
      <S.cancelButton onClick={()=>setIsConfirmModalOpen(true)}>취소하기</S.cancelButton>
      {/* {isResponseModalOpen && (
        <AlertModal onConfirmClick={() => setIsResponseModalOpen(false)} message={'취소되었습니다!'} />
      )} */}
      {isConfirmModalOpen && (
        <ConfirmModal
          title={`${
            eventState.eventType === 'ANNUAL' ?
            '연차':'당직'}`}
          subTitle={`${eventState.startDate}
            ${eventState.eventType === 'ANNUAL' ? 
            ' ~ ' + eventState.endDate : ''}`}
          textContent="해당 내용을 취소 하시겠습니까?"
          onConfirm={isCancled}
          onCancel={() => setIsConfirmModalOpen(false)}
        />
      )}
    </>
  )
}

export default CancelButton