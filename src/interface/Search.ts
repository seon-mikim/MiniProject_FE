export enum SearchType {
  USERNAME = 'username',
  EMAIL = 'email',
}

export interface SearchUserParams {
  keyword?: string;
  type?: SearchType;
  page?: number;
  size?: number;
}
