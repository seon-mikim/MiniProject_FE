export interface User {
  id : number,
  username : string,
  email: string,
  phone: string,
  imageUri?: string,
  thumbnailUri?: string,
  role : string,
  status: boolean,
  createdAt : string,
  updatedAt : string
}

export interface UserHeaderProfile {
  username: string,
  email: string,
  thumbnailUri?: string
}

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
  UNDETERMINED = "UNDETERMINED"
}

export interface AuthUser {
  id: number
  username: string
  img: string | null
  email: string
  role: string
  createAt: string
}
