import styled from 'styled-components';

export const PaginationContainer = styled.div`
  width: 100%;
  & .pagination-ul {
    display: flex;
    justify-content: center;
    gap: 25px;
    & li {
      color: ${({ theme }) => theme.color.lightBrown};
      cursor: pointer;
    }
    & li.currentPage {
      color: ${({ theme }) => theme.color.darkBrown};
      border-bottom: 1px solid ${({ theme }) => theme.color.darkBrown};
    }
    & li.pageLabel-btn.disabled {
      color: ${({ theme }) => theme.color.lightBrown};
    }
    & li.pageLabel-btn {
      color: ${({ theme }) => theme.color.darkBrown};
    }
  }
`;
export const ListContainer = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  padding: 20px 30px;
  width: 100%;
  &::-webkit-scrollbar {
    width: 5px;
    background-color: ${({ theme }) => theme.color.lightBeige};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.lightBrown};
    border-radius: 5px;
  }
`;
