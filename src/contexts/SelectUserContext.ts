
import { createContext } from 'react';
import { AuthUser, Role } from '../interface/User';

export const INITIAL_VALUE: AuthUser = {
  id: 0,
  username: '',
  imageUri: '',
  email: '',
  role: Role.UNDETERMINED,
  createAt: ''
}

interface SelectUserContextProps {
  selectedUser: AuthUser;
  setSelectedUser: React.Dispatch<React.SetStateAction<AuthUser>>;
}

const SelectUserContext = createContext<SelectUserContextProps | null>(null);

export default SelectUserContext;
