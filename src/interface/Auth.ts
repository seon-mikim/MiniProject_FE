export interface LoginRequest {
  email: string;
  password: string;
}

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
  status: number;
  msg: string;
  data: {
    id: number;
    username: string;
    email: string;
    phone: string;
    imageUri: string;
    thumbnailUri: string;
  };
}
export interface LoginResponse {
  status: number;
  msg: string;
  data: {
    id: number;
    username: string;
    email: string;
    phone: string;
    role: string;
    status: boolean;
    imageUri: string;
    thumbnailUri: string;
  };
}
