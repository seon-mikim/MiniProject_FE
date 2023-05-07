import * as S from './style'
import { Link } from 'react-router-dom'

function Admin() {
  const holidayCount = 5
  const nightCount = 10

  return (
    <div>
      <div>
        <Link to='/adminApproval'>
          <span>연차 승인 대기</span>
          <span>{holidayCount}</span>
        </Link>
      </div>
      <div>
        <Link to='/adminApproval'>
          <span>당직 승인 대기</span>
          <span>{nightCount}</span>
        </Link>
      </div>
      <span>
        <Link to='/adminAuth'>관리자 권한 설정</Link>
      </span>
      {/* <span>
        <Link to=''>계정 승인 설정</Link>
      </span> */}
    </div>
  )
}

export default Admin