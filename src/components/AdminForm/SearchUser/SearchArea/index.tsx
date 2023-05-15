import React, { useRef, useState, useEffect } from 'react';
import * as S from './style';
import { HiSearch, HiX } from 'react-icons/hi';
import { AuthUser } from '../../../../interface/User';
import SearchResultList from '../SearchResultList';
import { SearchType, SearchUserParams } from '../../../../interface/Search';
import { searchUser } from '../../../../api/Admin/SearchUser';

/**
 * @prop { AuthUser[] } 쿼리 키값으로 캐시된 전체 유저 목록
 */
interface searchInputProps {
  onSearchClick: ({ type, keyword }: SearchUserParams) => void;
}

// [검색]
// 검색어랑 필터 초기값
const initialValue: SearchUserParams = {
  type: SearchType.USERNAME,
  keyword: '',
};

function SearchArea({ onSearchClick }: searchInputProps) {
  // [검색]
  // 검색어랑 필터 상태 관리
  const [searchParameters, setSearchParameters] = useState<SearchUserParams>(initialValue);
  const debounceTimer = useRef<any>(null);
  // 검색어 상태 초기화 관리
  const searchInputEl = useRef<HTMLInputElement>(null);

  // select태그인 SearchFilter와 input태그인 SearchInput onChange
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSearchParameters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearchIconBtnClick = () => {
    if (!searchParameters.keyword) return; // 검색어가 없을 경우 작동 안함
    
    onSearchClick(searchParameters); // 검색 호출
    clearTimeout(debounceTimer.current)
    handleResetInput(); // input value 초기화
    setSearchParameters((prev) => ({ ...prev, keyword: '' })); // 검색어랑 필터 상태 초기화
    setFilteredPreviewList([])
  };

  // input 엔터 시 이벤트 핸들러
  const handleSearchInputKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') handleSearchIconBtnClick();
  };

  // input 태그 초기화
  const handleResetInput = () => {
    searchInputEl.current && (searchInputEl.current.value = '');
    setSearchParameters((prev) => ({ ...prev, keyword: '' }));
  };

  // [검색 미리보기(FilteredPreviewContainer)]
  const [filteredPreviewList, setFilteredPreviewList] = useState<AuthUser[]>([]);

  // 미리보기 열림 상태 관리
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);

  // 미리보기 닫기 이벤트 핸들러
  const handlePreviewClose = () => {
    setTimeout(() => {
      setIsPreviewOpen(false);
    }, 800); // 0.2초 뒤에 setIsPreviewOpen(false) 호출
  };

  // 렌더링이 끝나고 검색어, 필터, 또는 props의 list가 변할 때 수행할 내용
  useEffect(() => {
    if (searchParameters.keyword !== '') {
      if (debounceTimer.current) clearTimeout(debounceTimer.current); // 마지막에 호출한 것만 유효하도록 이전 디바운스 클리어

        debounceTimer.current = setTimeout(async () => {
        const result = await searchUser({type: searchParameters.type, keyword:searchParameters.keyword}); // 검색 호출
        setFilteredPreviewList(result.content);

      }, 1500);
    } 

    // 변할 때 마다 체크해서 실시간으로 리렌더링이 되도록 구독
  }, [searchParameters.keyword]);

  return (
    <S.SearchInputArea onChange={handleChange}>
      {/* search options */}
      <S.SearchFilter name="type">
        <option value={SearchType.USERNAME} defaultChecked>
          이름
        </option>
        <option value={SearchType.EMAIL}>이메일</option>
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
