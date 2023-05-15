import styled from 'styled-components';
import theme from '../../styles/theme';

export const ErrorPageContainer = styled.div`
  display: flex;
  height: 100vh;
`;
export const LogoContainer = styled.img`
  width: 480px;
  background: ${theme.color.brown};
  padding: 140px;
  box-sizing: border-box;
`;
export const ErrorForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ErrorTag = styled.h1`
  margin-top: 180px;
  font-size: 120px;
  text-align: center;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.brown};
`;

export const ErrorContent = styled.div`
  margin-top: 30px;
  width: 340px;
  height: 315px;
`;
const h2 = styled.h2`
  font-size: 30px;
  font-weight: ${theme.fontWeight.bold};
  text-align: center;
  color: ${theme.color.brown};
`;
export const topic = styled(h2)``;
export const main = styled(h2)`
  margin-top: 30px;
`;
