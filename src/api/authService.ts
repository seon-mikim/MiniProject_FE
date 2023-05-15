import { AxiosError } from 'axios';
import { LoginResponse, RegisterResponse, LoginRequest, RegisterRequest } from '../interface/Auth';
import { axiosFormInstance, axiosJsonInstance } from './axios';
import { setCookie } from '../utils/cookies';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import theme from '../styles/theme';

export const ERROR_TOAST_ID = 'ERROR_TOAST';
let toastId: string | null | number = null;

const showToastError = (message: string) => {
  if (toastId === null || !toast.isActive(toastId)) {
    toast.clearWaitingQueue({ containerId: ERROR_TOAST_ID }); // 큐에 있는 모든 토스트 메시지를 제거합니다.
    toastId = toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 800,
      hideProgressBar: true,
      icon: true,
      style: { width: '400px', color: `${theme.color.brown}`, background: `${theme.color.lightBeige}` },
      toastId: 'ERROR_TOAST',
    });
  }
};

export const login = async (user: LoginRequest) => {
  try {
    const { data, headers } = await axiosJsonInstance.post<LoginResponse>('/api/login', user);
    headers.authorization && setCookie('accessToken', headers.authorization.split(' ')[1]);
    console.log(data);
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
