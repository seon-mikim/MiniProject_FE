import styled from 'styled-components';
import theme from '../../styles/theme';
export const RegisterPageContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const LogoContainer = styled.div`
  width: 30%;
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
export const RegisterForm = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const RegisterTag = styled.h1`
  margin-top: 60px;
  font-size: 40px;
  text-align: center;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.brown};
`;
export const ImgStyle = styled.img`
  width: 150px;
  height: 150px;
  margin: 25px 0;
  background: ${theme.color.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  object-fit: cover;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  box-sizing: border-box;
  height: 75px;
  width: 450px;
`;
export const fileInputContainer = styled(InputContainer)`
  height: 50px;
`;

export const Input = styled.input`
  width: 400px;
  height: 45px;
  box-sizing: border-box;
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
  font-size: 15px;
  color: ${theme.color.lightBrown};
  border: none;
  &:focus {
    outline: none;
  }
`;
export const signUpButton = styled.button`
  width: 400px;
  height: 60px;
  background: ${theme.color.brown};
  color: ${theme.color.white};
  font-weight: ${theme.fontWeight.bold};
  font-size: 24px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  margin-top: 15px;
  color: red;
  font-size: 14px;
`;
