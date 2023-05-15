import LogoutButton from "../../Button/LogoutButton"
import MypageButton from "../../Button/MypageButton"
import * as S from "./style"

function ButtonSection({opacity, annualCount}: {opacity: number, annualCount: number | undefined}) {
  return (
    <S.flexColumnDiv opacity={opacity}>
      <S.annualCountSpan opacity={opacity}>남은 연차: {annualCount}일</S.annualCountSpan>
      <MypageButton opacity={opacity} />
      <LogoutButton opacity={opacity} />
    </S.flexColumnDiv>
  )
}

export default ButtonSection