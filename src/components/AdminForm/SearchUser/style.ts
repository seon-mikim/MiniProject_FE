import styled from 'styled-components';

export const Section = styled.section`
  height: inherit;
  background-color: ${(props) => props.theme.color.beige};
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex-grow: 1;
  padding: 15px;
  border-radius: 8px;
  position: relative;
`;

export const SearchHeader = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.dark};
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  margin-bottom: 15px;

  &::after {
    content: '';
    display: block;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.color.darkBrown};
    position: absolute;
    top: 55px;
    left: 0;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const SearchArea = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const SearchNotFound = styled.div`
  width: inherit;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const PaginationContainer = styled.div`
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
