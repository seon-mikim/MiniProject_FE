import * as S from './style';
import { UserHeaderProfile } from '../../../../../interface/User';
import { CgProfile } from 'react-icons/cg';
import { handleImageError } from '../../../../../utils/helpers';
// export interface UserHeaderProfile {
//   username: string | undefined,
//   email: string | undefined,
//   thumbnailUri?: string | undefined
// }
function ProfileSection({ userData }: { userData: UserHeaderProfile }) {
  console.log(userData);

  return (
    <S.CardContainer>
      <S.TextContent>
        <S.NameSpan>{userData.username}</S.NameSpan>
        <S.EmailSpan>{userData.email}</S.EmailSpan>
      </S.TextContent>
      <S.ImageWrapper>
        <S.ThumbnailImage onError={handleImageError} src={userData.thumbnailUri} />
      </S.ImageWrapper>
    </S.CardContainer>
  );
}

export default ProfileSection;
