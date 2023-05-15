import ProfileSection from "./ProfileSection copy"
import ButtonSection from "./ButtonSection"
import * as S from "./style"
import { User, UserHeaderProfile } from "../../../../interface/User"
import { useState } from "react"
import { useQuery } from "react-query"
import { getMyInfo } from "../../../../api/mypage"

function Header() {
  const { data: myinfo, isLoading, error } = useQuery(['myinfo'], getMyInfo)

  const [opacity, setOpacity] = useState(0)

  const changeOpacity = (opacity: number) => {
    const answer = opacity === 1 ? 0 : 1
    setOpacity(answer)
  }

  const userHeaderData: UserHeaderProfile = {
    username: myinfo?.username,
    email: myinfo?.email,
    thumbnailUri: myinfo?.thumbnailUri
  }

  if(isLoading) return <>로딩 중...</>
  if(error) return <>error</>

  return (
    <header>
      <S.headerDiv>
        <div onClick={() => changeOpacity(opacity)}>
          <ProfileSection userData={userHeaderData} />
        </div>
        <ButtonSection opacity={opacity} annualCount={myinfo?.annualCount} />
      </S.headerDiv>
    </header>
  )
}

export default Header