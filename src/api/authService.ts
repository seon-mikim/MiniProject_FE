import { AxiosError } from 'axios';
import { LoginResponse, RegisterResponse, LoginRequest, RegisterRequest } from '../interface/Auth';
import { axiosFormInstance, axiosJsonInstance } from './axios';
import { setCookie } from '../utils/cookies';
import { showToastError, showToastSuccess } from '../components/common/Tostify';

export const login = async (user: LoginRequest) => {
  try {
    const { data, headers } = await axiosJsonInstance.post<LoginResponse>('/api/login', user);
    headers.authorization && setCookie('accessToken', headers.authorization.split(' ')[1]);
    showToastSuccess('로그인 성공');
    return data;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.data.status === 401) {
      showToastError('아이디 또는 비밀번호를 확인하세요');
    } else if (error instanceof AxiosError && error.response?.data.status === 500) {
      showToastError('서버 에러');
    } else {
      console.error(error);
    }
  }
};

export const register = async (user: RegisterRequest) => {
  const formData = new FormData();
  const blob = new Blob([JSON.stringify(user.signupInDTO)], { type: 'application/json' });
  formData.append('image', user.image as File);
  formData.append('signupInDTO', blob);
  try {
    const { data } = await axiosFormInstance.post<RegisterResponse>('/api/signup', formData);
    showToastSuccess('회원가입 성공');
    return data;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.data.status === 400) {
      showToastError('이메일 또는 유저이름이 중복되었습니다.');
    } else if (error instanceof AxiosError && error.response?.data.status === 500) {
      showToastError('서버 에러');
    } else {
      console.error(error);
    }
  }
};
