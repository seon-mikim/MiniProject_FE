import React from 'react'
import * as S from './style'
import { Link } from 'react-router-dom'

function MypageButton() {
  return (
    <Link to='/mypage'>
      <S.mypageButton>
        마이페이지
      </S.mypageButton>
    </Link>
  )
}

export default MypageButton