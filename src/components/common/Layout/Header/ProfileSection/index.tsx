import * as S from "./style"
import { UserHeaderProfile } from "../../../../../interface/User"
import { handleImageError } from "../../../../../utils/helpers"

function ProfileSection({userData}: {userData: UserHeaderProfile}) {

  const email: string[] | string = userData.email ? userData.email.split('@') : ''
  return (
    <S.gridDiv >
      <S.nameSpan>{userData.username}</S.nameSpan>
      <S.emailFlexDiv>
        <S.emailSpan>{email[0]}</S.emailSpan>
        <S.emailSpan>@{email[1]}</S.emailSpan>
      </S.emailFlexDiv>
      <S.wrapperDiv>
        <img onError={handleImageError} src={userData.thumbnailUri} className="profileImg"/>
      </S.wrapperDiv>
    </S.gridDiv>
  )
}

export default ProfileSection