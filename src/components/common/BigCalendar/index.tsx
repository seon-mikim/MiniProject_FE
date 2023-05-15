import moment from 'moment'
import { Calendar, momentLocalizer, EventProps, Event } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { BigCalendarContainer } from './style'
import { useQuery } from 'react-query'
import { getEventList } from '../../../api/mainService'

interface MyEvent extends Event{
  type?: 'ANNUAL'|'DUTY'
}

interface DataProps {
  eventId: number;
  eventType: string;
  startDate: string;
  endDate: string;
  userName: string;
}

function EventCompoent({event}:Omit<EventProps, 'event'> & {event:MyEvent}){
  
  return <div style={{ backgroundColor:event?.type==='DUTY'?'transparents':'rgba(205, 133, 63,0.5)',display: 'flex', alignItems: 'center',borderRadius:'5px',padding:'4px 1px', color:event?.type==='DUTY'?'#452E27':'#fff'}}>
    <div style={{backgroundColor: event?.type === 'DUTY' ? 'red' : 'none', width: '10px', height:'10px', borderRadius: '100%', marginRight:"5px"}} />
    {event.title}
  </div>
}

//components={{
  // toolbar: CalendarToolbar
// }}
function BigCalendar() {
  const localizer = momentLocalizer(moment)
  const { data } = useQuery(['eventList'], () => getEventList());
  const events: MyEvent[] = data&&data.map((item:DataProps) => ({
    title: item.userName,
    start: item.startDate,
    end: item.endDate,
    type: item.eventType,
  }))
  
  return (
    <BigCalendarContainer>
      <Calendar
        events={events}
        localizer={localizer}
        style={{ width:1200,height: 780 }}
        popup
        components={{
          event: EventCompoent,
          eventContainerWrapper: () => <div style={{backgroundColor:"greend"}}></div>
        }}
        views={['month']}
      />
    </BigCalendarContainer>
  )
}

export default BigCalendar