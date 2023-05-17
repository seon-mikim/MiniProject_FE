import { getCookie } from '../utils/cookies';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

const getAxiosInstance = (ContentType: string) => {
  const config: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_SERVER_URL,
    headers: {
      'Content-type': ContentType,
    },
    withCredentials: true,
  };
  const instance = axios.create(config);
  instance.defaults.timeout = 12000;
  instance.interceptors.request.use(
    (request) => {
      const token = getCookie('accessToken');
      if (token) request.headers['Authorization'] = `Bearer ${token}`;
      return request;
    },
    (error: AxiosError) => {
      console.error('에러',error);
    }
  );
  return instance;
};

export const axiosJsonInstance = getAxiosInstance('application/json');
export const axiosFormInstance = getAxiosInstance('multipart/form-data');
