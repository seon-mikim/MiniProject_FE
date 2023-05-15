import * as S from './style'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

function LogoutButton({opacity}: {opacity: number}) {
  const [,, removeCookie] = useCookies(['accessToken'])
  const navigate = useNavigate()
  const handleClick = () => {
    removeCookie('accessToken')
    navigate('/')
  }
  return (
      <S.logoutButton onClick={handleClick} className='logout' opacity={opacity}>로그아웃</S.logoutButton>
  )
}

export default LogoutButton