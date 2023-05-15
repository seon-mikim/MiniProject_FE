import * as S from './style';
import { UserHeaderProfile } from '../../../../../interface/User';
import { handleImageError } from '../../../../../utils/helpers';

function ProfileSection({ userData }: { userData: UserHeaderProfile }) {
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
