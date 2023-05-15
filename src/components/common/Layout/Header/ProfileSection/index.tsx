import * as S from "./style"
import { UserHeaderProfile } from "../../../../../interface/User"
import { CgProfile } from "react-icons/cg"

function ProfileSection({userData}: {userData: UserHeaderProfile}) {

  return (
    <S.gridDiv >
      <S.nameSpan>{userData.username}</S.nameSpan>
      <S.emailSpan>{userData.email}</S.emailSpan>
      <S.wrapperDiv>
        {userData.thumbnailUri ? 
        <img src={userData.thumbnailUri} className="profileImg"/> : 
        <CgProfile color="#F8EBEB" className="profileImg"/>}
      </S.wrapperDiv>
    </S.gridDiv>
  )
}

export default ProfileSection