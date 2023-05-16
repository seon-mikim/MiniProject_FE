import { Data, ResponesData } from '../interface/Admin';
import { getCookie } from '../utils/cookies';
import { axiosJsonInstance } from './axios';

export const getRequestList = async (
  eventType: string,
  breakdownType: string,
  pageNumber: number,
  type: string,
  keyword: string,
) => {
  const startIndex = pageNumber - 1;

  const params: { [key: string]: any } = {
    page: startIndex,
    size: 6,
  };
  const config = {
    headers: {
      Authorization: `Bearer ${getCookie('accessToken')}`,
    },
    params: params,
  };
  if (breakdownType === 'approval') {
    if (type !== undefined) {
      params.type = type;
    }

    if (keyword !== undefined) {
      params.keyword = keyword;
    }
  }
  const { data } = await axiosJsonInstance.get<ResponesData>(`/api/admin/${eventType}/${breakdownType}`, config);
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
