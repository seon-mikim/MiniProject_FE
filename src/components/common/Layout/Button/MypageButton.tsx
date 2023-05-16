import React from 'react'
import * as S from './style'
import { Link } from 'react-router-dom'

function MypageButton({opacity}: {opacity: number}) {
  return (    
    <S.mypageButton opacity={opacity}>
      <Link to='/mypage'>
        마이페이지
      </Link>
    </S.mypageButton>
  )
}

export default MypageButton