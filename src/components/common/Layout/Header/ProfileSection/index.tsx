import * as S from "./style"
import { User, UserHeaderProfile } from "../../../../../interface/User"

function ProfileSection({userData}: {userData: UserHeaderProfile}) {
  console.log(userData)


  return (
    <div>
      <span>{userData.username}</span>
      <span>{userData.email}</span>
      <div><img src={userData.email}/></div>
    </div>
  )
}

export default ProfileSection