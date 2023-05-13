import { useContext, useCallback } from 'react';

import * as S from './style';
import { AuthUser, Role } from '../../../../interface/User';
import SelectUserContext from '../../../../contexts/SelectUserContext';
import ListItem from '../../../common/ListItem';


interface SearchResultListProps {
  searchResult: AuthUser[];
  isPreview: boolean;
}

function SearchResultList({ searchResult }: SearchResultListProps) {
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

  return (
    <S.SearchResultList>
      {searchResult &&
        searchResult.map((user, index) => {
   
          return (
            <ListItem
              key={index}
              imageUri={user.imageUri}
              username={user.username}
              email={user.email}
              textContent={[
                <span>{user.role === Role.ADMIN ? '관리자' : '사원'}</span>,
                <span>입사일: {formatDate(user.createAt)}</span>,
              ]}
              onClick={() => handleClick(user)}
            />
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