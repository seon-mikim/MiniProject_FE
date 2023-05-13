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
  updatedAt : string,
  annualCount: number
}

export interface UserHeaderProfile {
  username: string | undefined,
  email: string | undefined,
  thumbnailUri?: string | undefined
}

export interface UserMyInfo {
  username : string,
  email: string,
  phone: string,
  imageUri?: string,
  role : string,
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
