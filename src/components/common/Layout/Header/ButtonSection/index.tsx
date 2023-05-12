import LogoutButton from "../../Button/LogoutButton"
import MypageButton from "../../Button/MypageButton"
import * as S from "./style"

function ButtonSection({opacity}: {opacity: number}) {
  return (
    <S.flexColumnDiv opacity={opacity}>
      <MypageButton opacity={opacity} />
      <LogoutButton opacity={opacity} />
    </S.flexColumnDiv>
  )
}

export default ButtonSection