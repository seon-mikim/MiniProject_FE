import { emailSeparator } from '../../../utils/helpers';
import { Button } from '../Button/style';
import * as S from './style';
import React, { ReactNode } from 'react';

interface ListItemProps {
  gridColRatio?: string
  imageUri: string;
  username: string;
  email: string;
  textContent: Array<ReactNode>;
  buttons?: Array<{ label: string; onClick: () => void }>;
}



const ListItem = ({ gridColRatio, imageUri, username, email, textContent, buttons }: ListItemProps) => {
  const destructedEmailString = emailSeparator(email);
  return (
    <S.Container gridColRatio={gridColRatio}>
      {/* grid1: profileThumnail */}
      <S.ProfileThumbnail src={imageUri} />
      {/* grid2: userInfo */}
      <S.UserInfo>
        <S.Username>{username}</S.Username>
        <S.Email>
          <p>{destructedEmailString.emailId}</p>
          <span>{'@' + destructedEmailString.emailDomain}</span>
        </S.Email>
      </S.UserInfo>
      {/* grid3: textContent */}
      <S.TextContent>
        {textContent.map((node, index) => (
          <React.Fragment key={index}>{node}</React.Fragment>
        ))}
      </S.TextContent>
      {/* grid4: buttonsContainer */}
      {buttons && (
        <S.ButtonsContainer>
          {buttons.map((button, index) => (
            <Button size={'sm'} key={index} onClick={button.onClick}>
              {button.label}
            </Button>
          ))}
        </S.ButtonsContainer>
      )}
    </S.Container>
  );
};

export default ListItem;


