import { getCookie } from '../utils/cookies';
import { axiosJsonInstance } from './axios';

export const getRequestList = async (eventType: string, breakdownType: string) => {
  const { data } = await axiosJsonInstance.get(`/api/admin/${eventType}/${breakdownType}`, {
    headers: {
      Authorization: `Bearer ${getCookie('accessToken')}`,
    },
  });
  return data;
};

export interface PostApprovalProps {
  eventId: number;
  orderState: string;
  eventType: string;
}

export const postApproval = async ({ eventType, eventId, orderState }: PostApprovalProps) => {
  console.log(eventType, eventId, orderState);
  const { data } = await axiosJsonInstance.post(
    `/api/admin/${eventType}/order`,
    { eventId, orderState },
    {
      headers: {
        Authorization: `Bearer ${getCookie('accessToken')}`,
      },
    },
  );

  return data;
};
