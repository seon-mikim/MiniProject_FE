import moment from 'moment'
import React, { useEffect } from 'react'
import { Calendar, momentLocalizer, CalendarProps, EventProps,ToolbarProps, Event, EventWrapperProps } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { BigCalendarContainer } from './style'
import { useQuery } from 'react-query'
import { getEventList } from '../../../api/mainService'

interface MyEvent extends Event{
  type?: 'ANNUAL'|'DUTY'
}

interface CalendarProps {
  title: string,
  start: Date,
  end: Date,
  type: string
}

function EventCompoent({event}:Omit<EventProps, 'event'> & {event:MyEvent}){
  return <div style={{display: 'flex', alignItems: 'center'}}>
    <div style={{backgroundColor: event?.type === 'DUTY' ? 'red' : 'blue', width: '8px', height:'8px', borderRadius: '100%', marginRight:"5px"}} />
    {event.title}
  </div>
}

//components={{
  // toolbar: CalendarToolbar
// }}
function BigCalendar() {
  const localizer = momentLocalizer(moment)
  const { data } = useQuery(['eventList'], () => getEventList());
  const events: MyEvent[] = data&&data.map((item) => ({
    title: `[${item.eventType==="ANNUAL"?"연차":"당직"}] ${item.userName}`,
    start: item.startDate,
    end: item.endDate,
    type: item.eventType,
  }))
  
  return (
    <BigCalendarContainer>
      <Calendar
        events={events}
        localizer={localizer}
        style={{ width:1200,height: 720 }}
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