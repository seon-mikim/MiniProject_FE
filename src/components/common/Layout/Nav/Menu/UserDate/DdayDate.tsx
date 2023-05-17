import React, { useEffect } from 'react'
import * as S from './style'
import { useState } from 'react'

function DdayDate({nextDate, DDay}: {nextDate: string | null | undefined, DDay: number | null | undefined}) {
  const [ DDayEl, setDDayEl ] = useState<any>('신청내역이')
  const [ nextDateEl, setNextDateEl ] = useState<any>('없습니다')
  
  useEffect(()=>{
    if( nextDate !== null) {
      setNextDateEl(nextDate)
      if(DDay === 0) {
        setDDayEl('D-Day')
      } else{
        setDDayEl('D-' + DDay)
      }
    }
  }, [])

  return (
    <>
      <S.boldSpan>{DDayEl}</S.boldSpan>
      <S.smallSpan>{nextDateEl}</S.smallSpan>
    </>
  )
}

export default DdayDate