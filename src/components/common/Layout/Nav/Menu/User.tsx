import * as S from './style'
import DateType from './UserDate/DateType';
import DDay from './UserDate/DDay';
import { Link } from 'react-router-dom';

function User({opacity}: {opacity: number}) {
  const holiday = new Date('2023-05-20')
  const night = new Date('2023-05-18')

  return (
    <S.flexDiv opacity={opacity}>
      <S.menuDiv opacity={opacity}>
        <Link to='/main' className='userLink'>
          <S.gridSpan>연차</S.gridSpan>
          <DDay eventDay={holiday}/>
          <DateType eventDay={holiday}/>
        </Link>
      </S.menuDiv>
      <S.menuDiv opacity={opacity}>
        <Link to='/main' className='userLink'>
          <S.gridSpan>당직</S.gridSpan>
          <DDay eventDay={night}/>
          <DateType eventDay={night}/>
        </Link>
      </S.menuDiv>
    </S.flexDiv>
  )
}

export default User