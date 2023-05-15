import React from 'react'
import * as S from './style'
import { Link } from 'react-router-dom'

function MypageButton({opacity}: {opacity: number}) {
  return (
    <Link to='/mypage'>
      <S.mypageButton opacity={opacity}>
        마이페이지
      </S.mypageButton>
    </Link>
  )
}

export default MypageButton