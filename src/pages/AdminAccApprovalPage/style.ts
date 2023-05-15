import styled from 'styled-components';

export const MainContainer = styled.main`
  height: 100%;
`

export const Section = styled.section`

  background-color: ${({ theme }) => theme.color.beige};
  border-radius: 8px;

  box-sizing: border-box;
`;

export const SectionHeaderWrapper = styled.div`

`;

export const SectionHeader = styled.h2`
  color: ${({ theme }) => theme.color.darkBrown};
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding: 20px 30px;
`;

export const Divider = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.darkBrown};
  margin: 2px 0;
`;



