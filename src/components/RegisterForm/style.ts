import styled from 'styled-components';
import theme from '../../styles/theme';
export const RegisterPageContainer = styled.div`
  display: flex;
  height: 100vh;
`;
export const LogoContainer = styled.img`
  width: 480px;
  background: ${theme.color.brown};
  padding: 140px;
  box-sizing: border-box;
`;

export const RegisterForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const RegisterTag = styled.h1`
  margin-top: 80px;
  font-size: 40px;
  text-align: center;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.brown};
`;
export const ImgStyle = styled.img`
  width: 150px;
  height: 150px;
  margin-top: 40px;
  background: ${theme.color.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
`;

export const Input = styled.input`
  width: 400px;
  height: 40px;
  margin-top: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  font-weight: ${theme.fontWeight.bold};
  font-size: 18px;
  border: none;
  padding-left: 10px;
  &:focus {
    outline: none;
  }
`;
export const ImgSelection = styled.input`
  margin-top: 25px;
  font-size: 15px;
  padding-left: 100px;
  color: ${theme.color.lightBrown};
  border: none;
  padding-left: 10px;
  &:focus {
    outline: none;
  }
`;
export const signUpButton = styled.button`
  width: 400px;
  height: 60px;
  margin-top: 25px;
  background: ${theme.color.brown};
  color: ${theme.color.white};
  font-weight: ${theme.fontWeight.bold};
  font-size: 24px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: none;
`;

export const ErrorMessage = styled.p`
  margin-top: 15px;
  color: red;
  font-size: 15px;
`;
