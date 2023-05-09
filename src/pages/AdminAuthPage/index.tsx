import { useState, useMemo } from 'react'
import { AuthUser } from '../../interface/User'
import * as S from './style';
import SearchUser from '../../components/AdminForm/SearchUser';
import AuthEdit from '../../components/AdminForm/AuthEdit';
import SelectUserContext, { INITIAL_VALUE } from '../../contexts/SelectUserContext'


function AdminAuthPage() {
  const [selectedUser, setSelectedUser] = useState<AuthUser>(INITIAL_VALUE)
  const contextValue = useMemo(() => {
    return { selectedUser, setSelectedUser };
  }, [selectedUser]);


  return (
    <S.Main>
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
