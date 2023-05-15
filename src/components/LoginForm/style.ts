import styled from 'styled-components';
import theme from '../../styles/theme';
export const LoginPageContainer = styled.div`
  display: flex;
  height: 100vh;
`;
export const LogoContainer = styled.img`
  width: 480px;
  height: 100%;
  padding: 140px;
  box-sizing: border-box;
  background: ${theme.color.brown};
`;
export const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  `;
export const LoginTag = styled.h1`
  margin-top: 120px;
  font-size: 40px;
  text-align: center;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.brown};
`;
const Input = styled.input`
  width: 400px;
  height: 64px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  font-weight: ${theme.fontWeight.bold};
  font-size: 18px;
`;
export const emailInput = styled(Input)`
  margin-top: 120px;
  border:none;
  padding-left: 10px;
  box-sizing: border-box;
  &:focus{
    outline:none;
  }
`;
export const passwordInput = styled(Input)`
  margin-top: 40px;
  border:none;
  padding-left: 10px;
  box-sizing: border-box;
  &:focus{
    outline:none;
  }
`;
const Button = styled.button`
  width: 400px;
  height: 64px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  color: ${theme.color.white};
  font-weight: ${theme.fontWeight.bold};
  font-size: 24px;
  border: none;
`;
export const LoginButton = styled(Button)`
  margin-top: 120px;
  background: ${theme.color.lightBrown};
`;

export const JoinButton = styled(Button)`
  margin-top: 40px;
  background: ${theme.color.brown};
`;

export const ErrorMessage = styled.p`
  margin-top: 15px;
  font-size: 15px;
  color: red;
`;
