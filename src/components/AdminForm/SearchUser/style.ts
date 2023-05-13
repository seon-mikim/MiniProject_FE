import styled from 'styled-components';

export const Section = styled.section`
  height: 70vh;
  background-color: ${(props) => props.theme.color.beige};
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex-grow: 1;
  padding: 15px;
  border-radius: 8px;
`;

export const SearchHeader = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.dark};
  font-size: ${({ theme }) => theme.fontSize.large};
`;

export const Divider = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.darkBrown};
  margin: 2px 0;
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
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
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
`

