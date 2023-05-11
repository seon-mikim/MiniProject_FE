import React from 'react'
import * as S from './style'

function LogoutButton({opacity}: {opacity: number}) {
  return (
      <S.logoutButton className='logout' opacity={opacity}>로그아웃</S.logoutButton>
  )
}

export default LogoutButton