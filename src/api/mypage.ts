import { User, cancelEventType, setMyinfoData } from "../interface/User"
import { axiosFormInstance, axiosJsonInstance } from "./axios"

export const getMyInfo = async ():Promise<User> => {
  const res = await axiosFormInstance.get('/api/user/myinfo')
  return res.data.data
}

export const setMyInfo = async (post: setMyinfoData) => {
  const formData = new FormData();
  const blob = new Blob([JSON.stringify(post.modifyInDTO)], { type: 'application/json' })
  if (post.image) {
    formData.append('image', post.image)
  }
  formData.append('modifyInDTO',blob)
  const res = await axiosFormInstance.post('/api/user/myinfo', formData)
}

export const getMyAnnualList = async () => {
  const res = await axiosJsonInstance.get('/api/user/myannual')
  return res.data.data.content
}

export const getMyDutyList = async () => {
  const res = await axiosJsonInstance.get('/api/user/myduty')
  return res.data.data.content
}

export const cancelEvent = async (data:cancelEventType) => {
  const res = await axiosJsonInstance.post('/api/user/event/cancel', data)
}