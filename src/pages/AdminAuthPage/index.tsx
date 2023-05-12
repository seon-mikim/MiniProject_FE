import { useState, useMemo } from 'react'
import { AuthUser } from '../../interface/User'
import * as S from './style';
import SearchUser from '../../components/AdminForm/SearchUser';
import AuthEdit from '../../components/AdminForm/AuthEdit';
import SelectUserContext, { INITIAL_VALUE } from '../../contexts/SelectUserContext'


function AdminAuthPage() {
  // context에는 틀만 짜두었으므로 여기에서 선언함, 최적화 진행할 때 바뀔 수 있음
  const [selectedUser, setSelectedUser] = useState<AuthUser>(INITIAL_VALUE)
  const contextValue = useMemo(() => {
    return { selectedUser, setSelectedUser };
  }, [selectedUser]);


  return (
    <S.Main className='content'>
      <SelectUserContext.Provider value={contextValue}>
        {/* user search */}
        <SearchUser />
        {/* user auth edit */}
        <AuthEdit />
      </SelectUserContext.Provider>
    </S.Main>
  );
}

export default AdminAuthPage;
