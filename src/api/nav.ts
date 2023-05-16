import { nextEventEl } from "../interface/nav"
import { axiosJsonInstance } from "./axios"

export const getNextEvent = async ():Promise<nextEventEl> => {
  const res = await axiosJsonInstance.get('/api/user/nextevent')
  console.log(res.data.data)
  return res.data.data
}

export const getWaitingList = async (event: string) => {
  const res = await axiosJsonInstance.get(`/api/admin/${event}/request`)
  console.log(res.data.data.totalElements)
  return res.data.data.totalElements
}