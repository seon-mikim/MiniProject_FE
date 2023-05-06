import React, { useState } from 'react'
import { BsCalendarCheck } from 'react-icons/bs'
import * as S from './style'
function AnnualSection() {

  return (
    <S.Section>
      <h2>Today:2023</h2>
      <div>
        <h2>당직 / 연차 현황</h2>
        <BsCalendarCheck/>
      </div>
      <div>
        <button>연차</button>
        <button>당직</button>
        <button>내 연차 보기</button>
        <button>내 당직 보기</button>
      </div>
      <ul>
        <li>연차</li>
        <li>연차</li>
        <li>연차</li>
        <li>연차</li>
      </ul>
    </S.Section>
  )
}

export default AnnualSection