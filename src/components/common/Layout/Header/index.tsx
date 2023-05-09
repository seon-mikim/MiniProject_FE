import ProfileSection from "./ProfileSection"
import ButtonSection from "./ButtonSection"
import * as S from "./style"

function Header() {

  return (
    <header>
      <div>
        <ProfileSection />
        <ButtonSection />
      </div>
    </header>
  )
}

export default Header