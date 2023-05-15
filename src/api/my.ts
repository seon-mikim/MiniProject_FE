import { AxiosError } from "axios"
import { getCookie } from "../utils/cookies"
import { axiosJsonInstance } from "./axios"

export const getMyInfo = async () => {
  const token = getCookie('accessToken')
  if (!token) throw new Error("No available accessToken")
  try {
    const { data } = await axiosJsonInstance.get('/api/user/myinfo', {
      headers: {
        Authorization: "Bearer " + token
      }
    })
    return data.data
  }
  catch(error) {
    if (error instanceof AxiosError && error.response?.status === 401 ) throw new Error('Not Authorized')
  }
}