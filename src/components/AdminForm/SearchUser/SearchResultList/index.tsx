import { useContext,useEffect, useCallback } from 'react';

import * as S from './style';
import { AuthUser, Role } from '../../../../interface/User';
import SelectUserContext from '../../../../contexts/SelectUserContext';


interface SearchResultListProps {
  searchResult: AuthUser[];
  isPreview: boolean;
}

function SearchResultList({ searchResult, isPreview }: SearchResultListProps) {
  const context = useContext(SelectUserContext)
  
  const handleClick = useCallback(
    (user: AuthUser) => {
      context && context.setSelectedUser(user);
    },
    [context]
  );
  useEffect(() => {
    console.log('SearchUser 리렌더링');
  });
  return (
    <S.SearchResultList>
      {searchResult &&
        searchResult.map((user) => {
          const emailParts = user.email.split('@');
          const emailId = emailParts[0];
          const emailDomain = emailParts[1];
          return (
            <S.SearchResultListItem key={user.id} onClick={() => handleClick(user)}>
              <img src={user.img ?? ""} alt="사용자 프로필 사진" />
              <span>
                <span>{user.username}</span>
                <br />
                <span>{emailId}</span>
                <br />
                <span>{'@' + emailDomain}</span>
              </span>
              <span>{user.role === Role.ADMIN ? "관리자" : "사원"}</span>
              {!isPreview && <span>회사 입사일: {user.createAt}</span>}
            </S.SearchResultListItem>
          );
        })}
    </S.SearchResultList>
  );
}

export default SearchResultList;
