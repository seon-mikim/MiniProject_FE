import { SearchUserParams } from '../../interface/Search';
import { getCookie } from '../../utils/cookies';
import { axiosJsonInstance } from '../axios';

export const searchUser = async (params: SearchUserParams) => {
  const { type, keyword, page, size } = params;

  let url = `/api/admin/search`;

  if (type || keyword || page) url = url + '?'
  if (type) url = url + `type=${type}`;
  if (keyword) url = url + `&keyword=${keyword}`;
  if (size) url = url + `&size=${size}`
  if (page) url = url + `&page=${page}`;

  const response = await axiosJsonInstance.get(url, {
    headers: {
      Authorization: `Bearer ${getCookie('accessToken')}`,
    },
  });

  const data = response.data.data;
  return data;
};
