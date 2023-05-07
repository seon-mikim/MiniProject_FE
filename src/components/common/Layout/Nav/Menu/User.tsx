import * as S from './style'
import DateType from './UserDate/DateType';
import DDay from './UserDate/DDay';
import { Link } from 'react-router-dom';

function User() {
  const holiday = new Date('2023-05-20')
  const night = new Date('2023-05-18')

  return (
    <div>
      <div>
        <span>연차</span>
        <DDay eventDay={holiday}/>
        <DateType eventDay={holiday}/>
      </div>
      <div>
        <span>당직</span>
        <DDay eventDay={night}/>
        <DateType eventDay={night}/>
      </div>
      <span>
        <Link to='/main'>연차/당직 신청</Link>
      </span>
      <span>
        <Link to='/mypage'>마이 페이지</Link>
      </span>
    </div>
  )
}

export default User