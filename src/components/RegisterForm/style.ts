import styled from 'styled-components';
import theme from '../../styles/theme';
export const RegisterPageContainer = styled.div`
  display: flex;
  width: 1440px;
  height: 1024px;
`;
export const LogoContainer = styled.img`
  width: 480px;
  height: 1024px;
  background: ${theme.color.brown};
`;
export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 960px;
  height: 1024px;
`;
export const RegisterTag = styled.h1`
  margin-top: 120px;
  font-size: 40px;
  text-align: center;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.brown};
`;
export const ImgStyle = styled.img`
  width: 170px;
  height: 170px;
  margin-top: 45px;
  background: ${theme.color.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
`;

export const Input = styled.input`
  width: 400px;
  height: 49px;
  margin-top: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  font-weight: ${theme.fontWeight.bold};
  font-size: 18px;
`;
export const ImgSelection = styled.input`
  margin-top: 25px;
  font-size: 18px;
  padding-left: 100px;
  color: ${theme.color.lightBrown};
`;
export const signUpButton = styled.button`
  width: 400px;
  height: 64px;
  margin-top: 25px;
  background: ${theme.color.brown};
  color: ${theme.color.white};
  font-weight: ${theme.fontWeight.bold};
  font-size: 24px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;
