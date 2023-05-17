import * as S from './style'
import { eventState, listContent } from '../../../interface/User'
import EventState from './EventState'

function MyListElement({myElement}: {myElement: listContent}) {
  // console.log(myElement)
  const eventState: eventState = {
    eventId: myElement.eventId,
    eventType: myElement.eventType,
    startDate: myElement.startDate,
    endDate: myElement.endDate,
    orderState: myElement.orderState
  }
  return (
    <S.flexDiv>
      <span>
        {myElement.startDate}
        {myElement.eventType === 'ANNUAL' ? 
        ' ~ ' + myElement.endDate : null}
      </span>
      <EventState eventState={eventState}/>
    </S.flexDiv>
  )
}

export default MyListElement