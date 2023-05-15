import styled from 'styled-components';
import theme from '../../styles/theme';
export const LoginPageContainer = styled.div`
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

export const LoginForm = styled.form`
  width: 67%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LoginTag = styled.h1`
  margin: 120px 0;
  font-size: 40px;
  text-align: center;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.brown};
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  box-sizing: border-box;
  width: 450px;
  height: 100px;
`;
export const Input = styled.input`
  width: 400px;
  height: 60px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  font-weight: ${theme.fontWeight.bold};
  font-size: 18px;
  border: none;
  padding-left: 10px;
  box-sizing: border-box;
  &:focus {
    outline: none;
`;
export const ErrorMessage = styled.p`
  margin-top: 15px;
  font-size: 14px;
  color: red;
`;
const Button = styled.button`
  width: 400px;
  height: 60px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  color: ${theme.color.white};
  font-weight: ${theme.fontWeight.bold};
  font-size: 24px;
  border: none;
  cursor: pointer;
  margin-top: 40px;
`;
export const LoginButton = styled(Button)`
  background: ${theme.color.lightBrown};
`;

export const JoinButton = styled(Button)`
  background: ${theme.color.brown};
`;
