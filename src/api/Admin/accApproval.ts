import { getCookie } from '../../utils/cookies';
import { axiosJsonInstance } from '../axios';

export interface AccPendingResponse {
  id: number;
  createAt: string;
  imageUri: string;
  username: string;
  email: string;
  role: string;
}

export interface approveAccParams {
  username: string;
  email: string;
}

export const getAccPending = async (page: number) => {
  const { data } = await axiosJsonInstance.get(`/api/admin/signup/list?size=10&page=${page}`, {
    headers: {
      Authorization: `Bearer ${getCookie('authorization')}`,
    },
  });
  const content = data.data.content;
  return content;
};

export const approveAcc = async ({ username, email }: approveAccParams) => {
  const response = await axiosJsonInstance.post(
    '/api/admin/status',
    { username, email },
    { headers: {
        Authorization: `Bearer ${getCookie('accessToken')}`,
      },
    },
  );
  
  return response;
};
export const getApprovedAcc = async (page: number) => {
  const response = await axiosJsonInstance.get(
    `/api/admin/role/list/sort?size=10&page=${page}`,
    { headers: {
        Authorization: `Bearer ${getCookie('accessToken')}`,
      },
    },
  );
  const data = response.data.data
  return data;
};
