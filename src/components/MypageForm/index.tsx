import { useState } from 'react'
import MyList from './MyList'
import MyInfo from './MyInfo'
import { User, UserMyInfo } from '../../interface/User'
import { getMyInfo } from '../../api/mypage'
import { useQuery } from 'react-query'

function MypageForm() {
  const { data: myinfo, isLoading, error } = useQuery(['myinfo'], getMyInfo)

  if(isLoading) return <>로딩 중...</>
  if(error) return <>error</>

  return (
    <>
      <MyInfo username={myinfo?.username}
        email={myinfo?.email}
        phone={myinfo?.phone}
        imageUri={myinfo?.imageUri}
        role={myinfo?.role} />
      <MyList title={'나의 연차내역'}/>
      <MyList title={'나의 당직내역'}/>
    </>  
  )
}

export default MypageForm