import { useEffect, useState } from 'react'
import { cancelEventType, eventState } from '../../../../interface/User'
import * as S from './style'
import CancelButton from '../CancelButton'

function EventState({eventState}: {eventState: eventState}) {
  const [currentState, setCurrentState] = useState('')
  const currentDate = new Date()
  const startDate = new Date(eventState.startDate)
  useEffect(()=>{
    switch (eventState.orderState) {
      case 'WAITING':
        setCurrentState(
          startDate > currentDate ? '승인대기':'요청만료'
        )
        break;
      case 'APPROVED':
        setCurrentState(
          startDate > currentDate ? '승인완료':
          eventState.eventType === 'ANNUAL' ? '사용':'근무'
        )
        break;
      case 'REJECTED':
        setCurrentState('취소완료')
        break;
    }
  }, [eventState])

  const cancleEventEl:cancelEventType = {
    eventId: eventState.eventId,
    eventType: eventState.eventType
  }
  
  // console.log(eventState)

  return (
    <S.stateDiv>
      {currentState === '승인대기' ? 
        <CancelButton eventEl={cancleEventEl} />:null}
      <S.stateSpan state={currentState}>{currentState}</S.stateSpan>
    </S.stateDiv>
  )
}

export default EventState