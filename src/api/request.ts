import {axiosJsonInstance} from './axios'

export const getApproval = async () => {
  const { data } = await axiosJsonInstance.get('/api/admin/annual/request');
  return data;
};

 