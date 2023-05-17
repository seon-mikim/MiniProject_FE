import * as S from './style'

import { Link } from 'react-router-dom';
import { getNextEvent } from '../../../../../api/nav';
import { useQuery } from 'react-query';
import DdayDate from './UserDate/DdayDate';

function User({opacity}: {opacity: number}) {

  const { data: nextEvent , isLoading, error} = useQuery(['nextEvent'], getNextEvent)

  // const holiday = new Date(nextEvent?.nextAnnualDate)
  // const night = new Date(nextEvent?.nextDutyDate)

  if(isLoading) return <>로딩 중...</>
  if(error) return <>error</>

  return (
    <S.flexDiv opacity={opacity}>
      <S.shadowDiv>
        <S.menuDiv opacity={opacity}>
          <Link to='/main' className='userLink'>
            <S.gridSpan>연차</S.gridSpan>
            <DdayDate nextDate={nextEvent?.nextAnnualDate} DDay={nextEvent?.annualDDay}/>
            {/* <DDay eventDay={holiday}/>
            <DateType eventDay={holiday}/> */}
            {/* {
              nextEvent?.annualDDay ? 
              <>
                <S.boldSpan>D-{nextEvent?.annualDDay}</S.boldSpan>
                <S.smallSpan>{nextEvent?.nextAnnualDate}</S.smallSpan>
              </>:
              <>
                <S.smallSpan>신청내역이</S.smallSpan>
                <S.smallSpan>없습니다</S.smallSpan>
              </>
            } */}
          </Link>
        </S.menuDiv>
      </S.shadowDiv>
      <S.shadowDiv>
        <S.menuDiv opacity={opacity}>
          <Link to='/main' className='userLink'>
            <S.gridSpan>당직</S.gridSpan>
            <DdayDate nextDate={nextEvent?.nextDutyDate} DDay={nextEvent?.dutyDDay}/>
            {/* <DDay eventDay={night}/>
            <DateType eventDay={night}/> */}
            {/* {
              nextEvent?.dutyDDay ? 
              <>
                <S.boldSpan>D-{nextEvent?.dutyDDay}</S.boldSpan>
                <S.smallSpan>{nextEvent?.nextDutyDate}</S.smallSpan>
              </>:
              <>
                <S.smallSpan>신청내역이</S.smallSpan>
                <S.smallSpan>없습니다</S.smallSpan>
              </>
            } */}
          </Link>
        </S.menuDiv>
      </S.shadowDiv>
    </S.flexDiv>
  )
}

export default User