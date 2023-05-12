import { useContext, useCallback } from 'react';

import * as S from './style';
import { AuthUser, Role } from '../../../../interface/User';
import SelectUserContext from '../../../../contexts/SelectUserContext';


interface SearchResultListProps {
  searchResult: AuthUser[];
  isPreview: boolean;
}

function SearchResultList({ searchResult, isPreview }: SearchResultListProps) {
  const context = useContext(SelectUserContext)
  
  // const handleClick = useCallback(
  //   (user: AuthUser) => {
  //     context && context.setSelectedUser(user);
  //   },
  //   [context]
  // );

  const  handleClick = (user: AuthUser) => {
    if (context) {
      context.setSelectedUser(user)
      // console.log(user)
    }
  }
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = './default_profile.png';
  };

  return (
    <S.SearchResultList>
      {searchResult &&
        searchResult.map((user) => {
          const emailParts = user.email.split('@');
          const emailId = emailParts[0];
          const emailDomain = emailParts[1];
          return (
            <S.SearchResultListItem key={user.id} onClick={() => handleClick(user)}>
              <img src={user.imageUri ? user.imageUri : "./default_profile.png"} alt="사용자 프로필 사진" onError={handleImageError}/>
              <span>
                <span>{user.username}</span>
                <br />
                <span>{emailId}</span>
                <br />
                <span>{'@' + emailDomain}</span>
              </span>
              <span>{user.role === Role.ADMIN ? "관리자" : "사원"}</span>
              {!isPreview && <span>입사일: {formatDate(user.createAt)}</span>}
            </S.SearchResultListItem>
          );
        })}
    </S.SearchResultList>
  );
}

export default SearchResultList;

function formatDate(date: string) {
  const dateObj = new Date(date)
  return dateObj.toLocaleDateString()
}