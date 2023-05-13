import { User } from "../interface/User"
import { axiosFormInstance } from "./axios"

export const getMyInfo = async ():Promise<User> => {
  const res = await axiosFormInstance.get('/api/user/myinfo')
  console.log(res)
  return res.data.data
}