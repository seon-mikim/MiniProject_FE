import { AxiosError } from 'axios';
import { LoginResponse, RegisterResponse, LoginRequest, RegisterRequest } from '../interface/Auth';
import { axiosFormInstance, axiosJsonInstance } from './axios';
import { setCookie } from '../utils/cookies';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import theme from '../styles/theme';

const showToastError = (message: string) => {
  toast.error(message, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 3000,
    hideProgressBar: true,
    style: { width: '450px', color: `${theme.color.brown}`, background: `${theme.color.lightBeige}` },
  });
};

export const login = async (user: LoginRequest) => {
  try {
    const { data, headers } = await axiosJsonInstance.post<LoginResponse>('/api/login', user);
    headers.authorization && setCookie('accessToken', headers.authorization.split(' ')[1]);
    return data;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.data.status === 401) {
      showToastError('아이디 또는 비밀번호를 확인하세요');
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
  console.log(formData);
  try {
    const { data } = await axiosFormInstance.post<RegisterResponse>('/api/signup', formData);
    return data;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.data.status === 400) {
      showToastError('이메일 또는 유저이름이 중복되었습니다.');
    } else {
      console.error(error);
    }
  }
};
