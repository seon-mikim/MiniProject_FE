import * as S from "./style"
import { User, UserHeaderProfile } from "../../../../../interface/User"

function ProfileSection({userData}: {userData: UserHeaderProfile}) {
  console.log(userData)

  return (
    <S.gridDiv >
      <S.nameSpan>{userData.username}</S.nameSpan>
      <S.emailSpan>{userData.email}</S.emailSpan>
      <S.wrapperDiv><img src='https://picsum.photos/200'/></S.wrapperDiv>
    </S.gridDiv>
  )
}

export default ProfileSection