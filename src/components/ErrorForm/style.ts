import styled from 'styled-components';
import theme from '../../styles/theme';

export const ErrorPageContainer = styled.div`
  display: flex;
  height: 100vh;
  weight: 100vw;
`;
export const LogoContainer = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background: ${theme.color.brown};
`;
export const LogoImg = styled.img`
  height: 15%;
  width: 50%;
`;
export const ErrorForm = styled.div`
  width: 67%;
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
  width: 340px;
  height: 315px;
`;
export const h2 = styled.h2`
  font-size: 30px;
  margin-top: 50px;
  font-weight: ${theme.fontWeight.bold};
  text-align: center;
  color: ${theme.color.brown};
`;
