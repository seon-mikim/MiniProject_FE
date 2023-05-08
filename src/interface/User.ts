export interface User {
  id : number,
  userimg : string,
  username: string,
  email: string,
  number: string,
  annual : number,
  role : string,
  status: boolean,
  createAt : string,
  updateAt : string
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
