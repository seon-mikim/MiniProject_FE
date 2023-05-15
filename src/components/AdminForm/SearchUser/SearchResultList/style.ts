import styled from 'styled-components';

export const SearchResultList = styled.ul`
  height: 56vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &::-webkit-scrollbar {
    width: 5px;
    height: 10px;
    background-color: ${({ theme }) => theme.color.lightBeige};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.lightBrown};
    border-radius: 5px;
  } 
`;

export const SearchResultListItem = styled.li`
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  & > span:nth-of-type(1) {
    max-width: 150px;
    white-space: nowrap; /* 줄바꿈 방지 */
    overflow: hidden; /* 내용이 넘칠 경우 숨김 처리 */
    text-overflow: ellipsis; /* 넘친 부분에 "..." 추가 */
    & > span:first-child {
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      font-size: ${({ theme }) => theme.fontSize.base};
    }
    & > span:not(:first-child) {
      font-size: ${({ theme }) => theme.fontSize.xsmall};
      color: ${({ theme }) => theme.color.lightBrown};
    }
  }

  & > span:nth-of-type(2) {
   font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
  & > span:nth-of-type(3) {
    white-space: nowrap;
    font-size: ${({ theme }) => theme.fontSize.small};
    padding: 10px;
    box-sizing: border-box;
    & > span:first-child {
      display: block;

    }
  }

  & > img {
    padding: 5px;
    width: 64px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    object-fit: cover;
  }
`;
