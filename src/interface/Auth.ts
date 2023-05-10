export interface LoginRequest {
  email: string;
  password: string;
}
/*interface SignupDTO {
  username: string;
  password: string;
  email: string;
  phone: string;
}*/
export interface RegisterRequest {
  image: File | null;
  signupInDTO: {
    username: string;
    password: string;
    // checkpw: string;
    email: string;
    phone: string;
  };
}

export interface RegisterResponse {
  email: string;
  password: string;
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
