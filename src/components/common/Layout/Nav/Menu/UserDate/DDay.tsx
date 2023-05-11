import * as S from './style'

function DDay({eventDay}: {eventDay: Date}) {
  const today = new Date();
  const todayMs = today.getTime()
  const eventDayMs = eventDay.getTime()
  const dDayMs = eventDayMs - todayMs

  const dDay = Math.floor(dDayMs / (24 * 60 * 60 * 1000))

  return (
    <S.boldSpan>D-{dDay === 0 ? 'Day' : dDay < 10 ? '0' + dDay : dDay}</S.boldSpan>
  )
}

export default DDay