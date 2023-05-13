import styled from 'styled-components';
interface ContainerProps {
  gridColRatio?: string;
  withButton: boolean;
}

interface TextContentProps {
  withButton: boolean;
}

export const Container = styled.li<ContainerProps>`
  background-color: ${({ theme }) => theme.color.white};
  width: inherit;

  display: grid;
  align-items: center;
  grid-template-columns: ${({ gridColRatio }) => (gridColRatio ? gridColRatio : '50px 120px auto')};
  grid-template-areas: 'thumbnail userinfo textcontent ${({ withButton }) => (withButton ? 'buttons' : '')}';

  gap: 15px;
  border-radius: 8px;
  padding: 15px;

  cursor: pointer;
  box-sizing: border-box;
`;

export const ProfileThumbnail = styled.img`
  grid-area: thumbnail;
  border: 1px dotted black;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserInfo = styled.div`
  grid-area: userinfo;
  display: flex;
  flex-direction: column;
`;

export const Username = styled.div`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 600;
  margin: 2px 0;
`;

export const Email = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  color: ${({ theme }) => theme.color.beige};
  white-space: nowrap; /* 줄바꿈 방지 */
  overflow: hidden; /* 내용이 넘칠 경우 숨김 처리 */
  text-overflow: ellipsis; /* 넘친 부분에 "..." 추가 */
`;

export const TextContent = styled.div<TextContentProps>`
  grid-area: textcontent;
  display: flex;
  justify-content: ${({ withButton }) => (withButton ? 'space-between' : 'space-around')};
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.darkBrown};
  font-size: ${({ theme }) => theme.fontSize.base};

  & > * {
    max-width: 280px;
    max-height: 82px;
    text-overflow: ellipsis;
    overflow-y: hidden;
    word-wrap: break-word;
    white-space: nowrap;
  }
`;

export const ButtonsContainer = styled.div`
  grid-area: buttons;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;
