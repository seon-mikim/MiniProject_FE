import { useContext } from 'react';

import * as S from './style';
import { AuthUser, Role } from '../../../../interface/User';
import ListItem from '../../../common/ListItem';
import { SelectUserDispatchContext } from '../../../../pages/AdminAuthPage';
import { SET_SELECTED_USER } from '../../../../contexts/selectUserReducer';

interface SearchResultListProps {
  searchResult: AuthUser[];
  isPreview: boolean;
}

function SearchResultList({ searchResult }: SearchResultListProps) {

  const dispatch = useContext(SelectUserDispatchContext);
  const handleClick = (user: AuthUser) => {
    if (dispatch) {
      dispatch({ type: SET_SELECTED_USER, payload: user });
    }
  };

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
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString();
}
