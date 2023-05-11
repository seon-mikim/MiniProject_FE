import styled from "styled-components";
export const Container = styled.div`
  width: auto;
  /* width: fit-content; */
  display: grid;
  background-color: #fff;
  border-radius: 8px;
  align-items: center;
  grid-template-columns: 50px 170px auto;
  grid-template-areas:
    'thumbnail userinfo textcontent buttons buttons';
  height: 80px;
  padding: 15px;
  border-bottom: 1px solid #e0e0e0;
  gap: 15px;
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
  font-size: 16px;
  font-weight: 600;
`;

export const Email = styled.div`
  font-size: 14px;
  color: #888;
`;

export const TextContent = styled.div`
  grid-area: textcontent;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 5px;
`;

export const ButtonsContainer = styled.div`
  grid-area: buttons;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

