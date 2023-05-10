import LogoutButton from "../../Button/LogoutButton"
import MypageButton from "../../Button/mypageButton"
import * as S from "./style"

function ButtonSection() {
  return (
    <S.flexColumnDiv>
      <MypageButton />
      <LogoutButton />
    </S.flexColumnDiv>
  )
}

export default ButtonSection