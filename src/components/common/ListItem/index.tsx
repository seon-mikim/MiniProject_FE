import { Button } from '../Button/style';
import * as S from './style';
import React from 'react';

interface ListItemProps {
  imageURI: string;
  username: string;
  email: string;
  textContent: Array<string>;
  buttons?: Array<{ label: string; onClick: () => void }>;
}

const ListItem = ({ imageURI, username, email, textContent, buttons }: ListItemProps) => {
  return (
    <S.Container>
      <S.ProfileThumbnail src={imageURI} />
      <S.UserInfo>
        <S.Username>{username}</S.Username>
        <S.Email>{email}</S.Email>
      </S.UserInfo>
      <S.TextContent>
        {textContent.map((span, index) => (
          <span key={index}>{span}</span>
        ))}
      </S.TextContent>
      {buttons && (
        <S.ButtonsContainer>
          {buttons.map((button, index) => (
            <Button size={"sm"} key={index} onClick={button.onClick}>
              {button.label}
            </Button>
          ))}
        </S.ButtonsContainer>
      )}
    </S.Container>
  );
};

export default ListItem;
