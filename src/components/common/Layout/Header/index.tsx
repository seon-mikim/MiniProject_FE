import ProfileSection from "./ProfileSection"
import ButtonSection from "./ButtonSection"
import * as S from "./style"
import { User, UserHeaderProfile } from "../../../../interface/User"
import { useState } from "react"

const userData: User = {
  id: 1,
  username: "사르",
  email: "ssar@nate.com",
  phone: "010-1234-1234",
  imageUri: "https://test",
  thumbnailUri: "https://test",
  role: "ADMIN",
  status: true,
  createdAt: "2023-05-10T00:55:07.240486",
  updatedAt: "2023-05-10T00:55:07.232618"
}

function Header() {
  const [opacity, setOpacity] = useState(0)

  const changeOpacity = (opacity: number) => {
    const answer = opacity === 1 ? 0 : 1
    setOpacity(answer)
  }

  const userHeaderData: UserHeaderProfile = {
    username: userData.username,
    email: userData.email,
    thumbnailUri: 'https://picsum.photos/200' //userData.thumbnailUri
  }
  return (
    <header>
      <S.headerDiv>
        <div onClick={() => changeOpacity(opacity)}>
          <ProfileSection userData={userHeaderData} />
        </div>
        
        <ButtonSection opacity={opacity}/>
      </S.headerDiv>
    </header>
  )
}

export default Header