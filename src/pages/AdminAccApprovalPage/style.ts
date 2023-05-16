import styled from 'styled-components';

export const MainContainer = styled.main`
  height: calc(100vh - 160px);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  `;

export const Section = styled.section`
  height: inherit;
  background-color: ${({ theme }) => theme.color.beige};
  border-radius: 8px;
  padding: 15px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const SectionHeader = styled.h2`
  color: ${({ theme }) => theme.color.darkBrown};
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding-bottom: 15px;
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
