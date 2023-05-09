import * as S from './style';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { myGetUsers } from './data';
import SearchResultList from './SearchResultList';
import SearchArea, { searchParameters } from './SearchArea';
import { AuthUser } from '../../../interface/User';
import Pagination from './Pagination';

function SearchUser() {
  const [filteredList, setFilteredList] = useState<AuthUser[]>([]);
  // useQuery로 데이터 페칭 및 케싱
  const { data: userList, isLoading, isError } = useQuery(['admin', 'users'], () => myGetUsers(), {
    onSuccess: (data) => {
      setFilteredList(data)
    }
  });


  const onSearchClick = ({ filter, keyword }: searchParameters) => {
    if (keyword && userList) {
      // 저장된 userList에서 검색어에 일치하는 user 분류
      const filteredUsers = userList.filter((user: AuthUser) =>
        filter === 'name'
          ? user.username.toLowerCase().includes(keyword.toLowerCase())
          : user.email.toLowerCase().includes(keyword.toLowerCase()),
      );
      setFilteredList(filteredUsers);
    } else {
      setFilteredList([]);
    }
  };

  return (
    <S.Section>
      {/* search area header */}
      <S.SearchHeader>사원 검색</S.SearchHeader>
      <S.Divider />
      {/* search input area */}

      <SearchArea userList={userList ? userList : []} onSearchClick={onSearchClick} />
      <S.Divider />

      {/* search result area */}
      <S.SearchResultContainer>
        {isLoading && <S.SkeletonUI />}
        {!isLoading && (filteredList?.length === 0 || !filteredList) ? (
          <S.SearchNotFound>
            <span>검색 결과가 없습니다.</span>
          </S.SearchNotFound>
        ) : (
          <SearchResultList isPreview={false} searchResult={filteredList} />
        )}
      </S.SearchResultContainer>
      <S.PaginationContainer>
        {/* 일단 페이지네이션 보류 */}
        {/* <Pagination  /> */}
      </S.PaginationContainer>
    </S.Section>
  );
}

const memoizedSearchUser = React.memo(SearchUser);
export default memoizedSearchUser
