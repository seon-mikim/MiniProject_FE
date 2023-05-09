import { AxiosError } from 'axios';
import { AuthResponse, LoginRequest, RegisterRequest } from '../interface/Auth';
import { axiosFormInstance, axiosJsonInstance } from './axios';
import { setCookie } from '../utils/cookies';

export const login = async (user: LoginRequest) => {
  try {
    const {data, headers} = await axiosJsonInstance.post<AuthResponse>('/api/login', user);
    headers.authorization&&setCookie('accessToken', headers.authorization.split(' ')[1]);
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
  try {
    const { data } = await axiosFormInstance.post<AuthResponse>('/api/signup', user);
    return data;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 400) {
      alert('이메일 또는 유저이름이 중복되었습니다.');
    } else {
      console.error(error);
    }
  }
};
