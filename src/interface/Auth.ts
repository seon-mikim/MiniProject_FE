export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest extends LoginRequest {
  name: string;
  checkpw: string;
  phone: string;
}
export interface UserPayload {
  id: number;
  username: string;
  email: string;
}

export interface AuthResponse extends UserPayload {
  iat: number;
  exp: number;
  accessToken: string;
}
