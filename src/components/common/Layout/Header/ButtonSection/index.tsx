import LogoutButton from "../../Button/LogoutButton"
import MypageButton from "../../Button/mypageButton"
import * as S from "./style"

function ButtonSection({opacity}: {opacity: number}) {
  return (
    <S.flexColumnDiv opacity={opacity}>
      <MypageButton />
      <LogoutButton />
    </S.flexColumnDiv>
  )
}

export default ButtonSection