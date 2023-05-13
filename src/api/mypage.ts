import { User, setMyinfoData } from "../interface/User"
import { axiosFormInstance } from "./axios"

export const getMyInfo = async ():Promise<User> => {
  const res = await axiosFormInstance.get('/api/user/myinfo')
  console.log(res)
  return res.data.data
}

export const setMyInfo = async (post: setMyinfoData) => {
  console.log(post)
  const formData = new FormData();
  const blob = new Blob([JSON.stringify(post.modifyInDTO)], { type: 'application/json' })
  if (post.image) {
    formData.append('image', post.image)
  }
  formData.append('modifyInDTO',blob)
  const res = await axiosFormInstance.post('/api/user/myinfo', formData)
  console.log(res)
}