import React, { useRef, useState, useEffect } from 'react';
import * as S from './style';
import { HiSearch, HiX } from 'react-icons/hi';
import { AuthUser } from '../../../../interface/User';
import SearchResultList from '../SearchResultList';

/**
 * @prop { AuthUser[] } 쿼리 키값으로 캐시된 전체 유저 목록
 */
interface sesarchInputProps {
  userList: AuthUser[];
  onSearchClick: ({ filter, keyword }: searchParameters) => void;
}

export interface searchParameters {
  filter: string;
  keyword: string;
}

// [검색]
// 검색어랑 필터 초기값
const initialValue = {
  filter: 'name',
  keyword: '',
};

function SearchArea({ userList, onSearchClick }: sesarchInputProps) {
  // [검색]
  // 검색어랑 필터 상태 관리
  const [searchParameters, setSearchParameters] = useState<searchParameters>(initialValue);

  // 검색어 상태 초기화 관리
  const searchInputEl = useRef<HTMLInputElement>(null);

  // 검색 버튼 다중 클릭 방지 상태 관리
  const [isSearching, setIsSearching] = useState<boolean>(false);

  // select태그인 SearchFilter와 input태그인 SearchInput onChange
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSearchParameters((prev) => ({ ...prev, [name]: value }));
  };

  // 검색 버튼 클릭 이벤트 핸들러
  const handleSearchIconBtnClick = () => {
    if (!searchParameters.keyword) return;

    if (isSearching) return;

    setIsSearching(true); // 검색 시작
    onSearchClick(searchParameters); // 부모 요소의 검색 호출
    setIsSearching(false); // 검색 끝
    handleResetInput();
    setSearchParameters(prev => ({...prev, keyword: ''})); // 검색어랑 필터 상태 초기화
  };

  // input 엔터 시 이벤트 핸들러
  const handleSearchInputKeyDown = (event: React.KeyboardEvent) => {
    if (isSearching) return;

    if (event.key === 'Enter') handleSearchIconBtnClick();
  };

  // input 태그 초기화
  const handleResetInput = () => {
    searchInputEl.current && (searchInputEl.current.value = '');
    setSearchParameters((prev) => ({ ...prev, keyword: '' }));
  };

  // [검색 미리보기(FilteredPreviewContainer)]
  // props로 userList 받아와서 필터링한 결과 상태 관리
  const [filteredPreviewList, setFilteredPreviewList] = useState<AuthUser[]>([]);

  // 미리보기 열림 상태 관리
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);

  // 미리보기 닫기 이벤트 핸들러
  const handlePreviewClose = () => {
    setTimeout(() => {
      setIsPreviewOpen(false);
    }, 200); // 0.2초 뒤에 setIsPreviewOpen(false) 호출
  };

  // 미리보기 결과 재정렬 Helper 함수
  const sortByUsername = (a: AuthUser, b: AuthUser) => {
    return a.username.toLowerCase() < b.username.toLowerCase() ? -1 : 1;
  };

  const sortByEmail = (a: AuthUser, b: AuthUser) => {
    return a.email.toLowerCase() < b.email.toLowerCase() ? -1 : 1;
  };

  // 렌더링이 끝나고 검색어, 필터, 또는 props의 list가 변할 때 수행할 내용
  useEffect(() => {
    if (searchParameters.keyword && userList) {
      // 저장된 userList에서 검색어에 일치하는 user 분류
      const filteredUsers = userList.filter((user: AuthUser) =>
        searchParameters.filter === 'name'
          ? user.username.toLowerCase().includes(searchParameters.keyword.toLowerCase())
          : user.email.toLowerCase().includes(searchParameters.keyword.toLowerCase()),
      );

      // 분류한 배열이 존재할 경우 filter값에 따라 오름차순으로 재정렬
      if (filteredUsers) {
        const sortedFilteredUsers = filteredUsers.sort(
          searchParameters.filter === 'name' ? sortByUsername : sortByEmail,
        );
        setFilteredPreviewList(sortedFilteredUsers);
      }
    } else {
      // keyword나 userlist 없을 때는 빈 배열 설정
      setFilteredPreviewList([]);
    }
    // 변할 때 마다 체크해서 실시간으로 리렌더링이 되도록 구독
  }, [searchParameters.keyword, searchParameters.filter, userList]);

  // ㅇ
  return (
    <S.SearchInputArea onChange={handleChange}>
      {/* search options */}
      <S.SearchFilter name="filter">
        <option value="name" defaultChecked>
          이름
        </option>
        <option value="email">이메일</option>
      </S.SearchFilter>

      {/* search term input */}
      <div style={{ position: 'relative', display: 'flex', flexGrow: 1 }}>
        <S.SearchInput
          autoComplete="off"
          ref={searchInputEl}
          onFocus={() => setIsPreviewOpen(true)} // 클릭 시 미리보기 상태 열림
          onBlur={handlePreviewClose} // blur시 0.2초 후에 닫힘 -> 미리보기 클릭 가능
          onKeyDown={handleSearchInputKeyDown} // 엔터키 핸들러
          isPreviewRequired={isPreviewOpen && filteredPreviewList.length > 0} // 미리보기 상태 열림 && 미리보기 결과 존재
          name="keyword"
          type="text"
        />
        {/* search input reset button */}
        {isPreviewOpen && (
          <S.SearchInputResetButton onClick={handleResetInput}>
            <HiX />
          </S.SearchInputResetButton>
        )}
        {/* search button */}
        <S.SearchIconButton onClick={handleSearchIconBtnClick}>
          <HiSearch />
        </S.SearchIconButton>
        {isPreviewOpen && filteredPreviewList.length > 0 && (
          <S.filteredPreviewContainer>
            <SearchResultList isPreview={true} searchResult={filteredPreviewList} />
          </S.filteredPreviewContainer>
        )}
      </div>
    </S.SearchInputArea>
  );
}

export default SearchArea;
