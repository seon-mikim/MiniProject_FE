
import styled from 'styled-components';
interface ContainerProps {
  gridColRatio?: string;
}

export const Container = styled.div<ContainerProps>`
  background-color: ${({ theme }) => theme.color.white};
  width: inherit;

  display: grid;
  align-items: center;
  grid-template-columns: ${({ gridColRatio }) => (gridColRatio ? gridColRatio : '70px 150px auto')};
  grid-template-areas:
  'thumbnail userinfo textcontent buttons';
  
  gap: 15px;
  border-radius: 8px;
  padding: 15px;

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
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 600;
`;

export const Email = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.beige};
`;

export const TextContent = styled.div`
  grid-area: textcontent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.darkBrown};

  & > * {
    max-width: 220px;
    max-height: 82px;
    text-overflow: ellipsis;
    overflow-y: hidden;
    word-wrap: break-word;
    white-space: normal;
  }
`;

export const ButtonsContainer = styled.div`
  grid-area: buttons;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;
