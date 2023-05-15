import { AxiosError } from 'axios';
import { LoginResponse, RegisterResponse, LoginRequest, RegisterRequest } from '../interface/Auth';
import { axiosFormInstance, axiosJsonInstance } from './axios';
import { setCookie } from '../utils/cookies';

export const login = async (user: LoginRequest) => {
  try {
    const { data, headers } = await axiosJsonInstance.post<LoginResponse>('/api/login', user);
    headers.authorization && setCookie('accessToken', headers.authorization.split(' ')[1]);
    return data;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 400) {
      alert('이메일 또는 비밀번호가 틀렸습니다.');
    } else {
      console.error(error);
    }
  }
};

export const register = async (user: RegisterRequest) => {
  const formData = new FormData();
  //const data = JSON.stringify(user.signupInDTO);
  const blob = new Blob([JSON.stringify(user.signupInDTO)], { type: 'application/json' });
  formData.append('image', user.image as File);
  formData.append('signupInDTO', blob);

  try {
    const { data } = await axiosFormInstance.post<RegisterResponse>('/api/signup', formData);
    return data;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 400) {
      alert('이메일 또는 유저이름이 중복되었습니다.');
    } else {
      console.error(error);
    }
  }
};
