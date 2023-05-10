import ProfileSection from "./ProfileSection"
import ButtonSection from "./ButtonSection"
import * as S from "./style"
import { User, UserHeaderProfile } from "../../../../interface/User"

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
  const userHeaderData: UserHeaderProfile = {
    username: userData.username,
    email: userData.email,
    thumbnailUri: userData.thumbnailUri
  }
  return (
    <header>
      <div>
        <ProfileSection userData={userHeaderData} />
        <ButtonSection />
      </div>
    </header>
  )
}

export default Header