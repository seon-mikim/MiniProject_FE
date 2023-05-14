import { useState } from 'react'
import MyList from './MyList'
import MyInfo from './MyInfo'
import { User, UserMyInfo } from '../../interface/User'
import { getMyInfo, getMyAnnualList, getMyDutyList } from '../../api/mypage'
import { useQuery } from 'react-query'

function MypageForm() {
  const { data: myinfo, isLoading, error } = useQuery(['myinfo'], getMyInfo)
  const { data: myAnnualList } = useQuery(['ANNUAL'], getMyAnnualList)
  const { data: myDutyList } = useQuery(['DUTY'], getMyDutyList)

  if(isLoading) return <>로딩 중...</>
  if(error) return <>error</>
  console.log(myAnnualList)
  console.log(myDutyList)

  return (
    <>
      <MyInfo username={myinfo?.username}
        email={myinfo?.email}
        phone={myinfo?.phone}
        imageUri={myinfo?.imageUri}
        role={myinfo?.role} />
      <MyList title={'연차 내역'} myList={myAnnualList} />
      <MyList title={'당직 내역'} myList={myDutyList} />
    </>  
  )
}

export default MypageForm