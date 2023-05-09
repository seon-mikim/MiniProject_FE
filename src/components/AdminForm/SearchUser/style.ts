import styled, { keyframes } from 'styled-components';

export const Section = styled.section`
  max-width: 600px;
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

export const SearchResultContainer = styled.div`
  height: 500px;
  overflow-y: hidden;
  & ul {
    display: flex;
    flex-direction: column;
    gap: 15px;

    & > li {
      display: flex;
      align-items: center;
      border-radius: 8px;
    }
  }
`;

const loadingAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: -400% 50%;
  }
`;

export const SkeletonUI = styled.div`
  width: inherit;
  height: inherit;
  border-radius: 8px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.color.lightBrown} 35%,
    ${({ theme }) => theme.color.lightBeige} 50%,
    ${({ theme }) => theme.color.lightBrown} 85%
  );
  background-size: 400% 100%;
  filter: opacity(15%);
  animation: ${loadingAnimation} 3s infinite;
`;

export const SearchNotFound = styled.div`
  width: inherit;
  height: inherit;

`;

export const PaginationContainer = styled.div`
  text-align: center;
`