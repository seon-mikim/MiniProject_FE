import { useReducer, createContext } from 'react';
import { AuthUser } from '../../interface/User';
import * as S from './style';
import SearchUser from '../../components/AdminForm/SearchUser';
import AuthEdit from '../../components/AdminForm/AuthEdit';
import { INITIAL_VALUE, SelectActionTypes, selectUserReducer } from '../../contexts/selectUserReducer';

export const SelectUserStateContext = createContext<AuthUser>(INITIAL_VALUE);
export const SelectUserDispatchContext = createContext<React.Dispatch<SelectActionTypes> | null>(null);

function AdminAuthPage() {
  // context에는 틀만 짜두었으므로 여기에서 선언함, 최적화 진행할 때 바뀔 수 있음
  // const [selectedUser, setSelectedUser] = useState<AuthUser>(INITIAL_VALUE)
  // const contextValue = useMemo(() => {
  //   return { selectedUser, setSelectedUser };
  // }, [selectedUser]);

  // context를 dispatch로 분리하여 리렌더링 최소화 시도, 위 주석은 이전 코드
  const [state, dispatch] = useReducer(selectUserReducer, INITIAL_VALUE);

  return (
    <S.Main className="content">
      <SelectUserDispatchContext.Provider value={dispatch}>
        {/* user search */}
        <SearchUser />
      </SelectUserDispatchContext.Provider>
      <SelectUserDispatchContext.Provider value={dispatch}>
        <SelectUserStateContext.Provider value={state}>
          {/* user auth edit */}
          <AuthEdit />
        </SelectUserStateContext.Provider>
      </SelectUserDispatchContext.Provider>
    </S.Main>
  );
}

export default AdminAuthPage;
