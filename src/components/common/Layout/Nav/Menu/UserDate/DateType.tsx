import * as S from './style'

function DateType({eventDay}: {eventDay: Date}) {
  const year = eventDay.getFullYear()
  const month = eventDay.getMonth() + 1
  const date = eventDay.getDate()
  const eventDayStr = String(year) + '.' +
    (month<10 ? '0'+String(month): String(month)) + '.' +
    (date<10 ? '0'+String(date): String(date))

  return (
    <S.smallSpan>{eventDayStr}</S.smallSpan>
  )
}

export default DateType