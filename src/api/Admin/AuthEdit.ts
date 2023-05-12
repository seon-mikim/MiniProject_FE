import { Role } from './../../interface/User';
import { axiosJsonInstance } from "../axios"
import { getCookie } from '../../utils/cookies';
import { AxiosResponse } from 'axios';

interface AuthEditRequest {
  email: string
  role: keyof typeof Role
}


export const updateRole = async ({ email, role }: AuthEditRequest) => {
  const response = await axiosJsonInstance.post('/api/admin/role/update', {
    email,
    role
  }, 
  )

  return response.data
}

// http://43.200.191.76:8080/api/admin/role/list/?page=0&size=5
// def(query param none): page=0, size=10
export const getAuthUsersByPage = async (pageNumber: number) => {
  const response = await axiosJsonInstance.get(`/api/admin/role/list/?page=${pageNumber}`, {
    headers: {
      Authorization: `Bearer ${getCookie('accessToken')}`,
    }
  })
  const data = response.data
  return data
}

export const getAuthUsers = async () => {
  const response = await axiosJsonInstance.get('/api/admin/role/list', {
    headers: {
      Authorization: `Bearer ${getCookie('accessToken')}`,
    }
  })
  const data = response.data.content
  return data
}

