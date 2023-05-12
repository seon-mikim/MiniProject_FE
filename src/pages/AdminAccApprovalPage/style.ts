import styled from 'styled-components';

export const Section = styled.section`
  width: 80vw;
  height: 80vh;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.beige};
  border-radius: 8px;
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

export const TapMenus = styled.div`
  padding: 20px 0 0 30px;
  & button {
    margin-right: 15px;
  }
`;

export const ListContainer = styled.div`
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
