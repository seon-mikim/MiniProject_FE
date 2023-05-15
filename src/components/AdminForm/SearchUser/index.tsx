import * as S from './style';
import React, { memo, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import SearchResultList from './SearchResultList';
import SearchArea from './SearchArea';
import { AuthUser, Role } from '../../../interface/User';
import { searchUser } from '../../../api/Admin/SearchUser';
import ReactPaginate from 'react-paginate';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { SearchType, SearchUserParams } from '../../../interface/Search';
import { SkeletonUI } from '../../common/SkeletonUI/style';
import { Button } from '../../common/Button/style';

const initialValue: SearchUserParams = {
  type: SearchType.USERNAME,
  keyword: '',
};

const PAGE_SIZE = 10;

function SearchUser() {
  const [filteredList, setFilteredList] = useState<AuthUser[]>([]);
  const [searchParams, setSearchParams] = useState(initialValue);
  // const [tabFilter, setTabFilter] = useState<Role>(Role.UNDETERMINED)
  const [page, setPage] = useState<number>(0);
  const queryClient = useQueryClient();

  const [totalPages, setTotalPages] = useState<number>(0)
  // useQuery로 데이터 페칭 및 케싱
  const { status, data, isPreviousData } = useQuery({
    queryKey: ['admin', 'search', searchParams, page],
    queryFn: () => searchUser({ size: PAGE_SIZE, type: searchParams.type, keyword: searchParams.keyword, page }),
    keepPreviousData: true,
    onSuccess: (response) => {
      setFilteredList(response.content);
      setTotalPages(response.totalPages)
    },
  });

  React.useEffect(() => {
    if (data) {
      setFilteredList(data.content);
    }
  }, [page, data]);

  React.useEffect(() => {
    if (!isPreviousData && data?.last !== true) {
      queryClient.prefetchQuery({
        queryKey: ['admin', 'search', searchParams, page + 1],
        queryFn: () =>
          searchUser({ size: PAGE_SIZE, type: searchParams.type, keyword: searchParams.keyword, page: page + 1 }),
      });
    }
  }, [page, queryClient, isPreviousData, data]);

  const onSearchClick = ({ type, keyword }: SearchUserParams) => {
    setSearchParams({ type, keyword });
    setPage(0);
  };

  type PageChangeEventData = {
    selected: number;
  };

  const handlePageClick = (event: PageChangeEventData) => {
    setPage(event.selected);
  };

  const handleAllButtonClick = () => {
    setSearchParams(initialValue)
    setPage(0)
  }

  return (
    <S.Section>
      {/* search area header */}
      <S.SearchHeader>사원 검색</S.SearchHeader>
      <S.Divider />
      {/* search input area */}

      <SearchArea onSearchClick={onSearchClick} />

      {/* tabs */}
      <S.TabContainer>
        <Button onClick={handleAllButtonClick} size="sm">전체</Button>
        {/* <Button size="sm">사원</Button>
        <Button size="sm">관리자</Button> */}
      </S.TabContainer>

      {/* search result area */}

      {status === 'loading' && <SkeletonUI />}
      {status === 'success' && filteredList.length === 0 && (
        <S.SearchNotFound>
          <span>검색 결과가 없습니다.</span>
        </S.SearchNotFound>
      )}
      {status === 'success' && filteredList.length > 0 && (
        <SearchResultList isPreview={false} searchResult={filteredList} />
      )}
  
      <S.PaginationContainer style={{ width: '100%' }}>
      {totalPages > 0 && (
          <ReactPaginate
            pageCount={totalPages}
            pageRangeDisplayed={10}
            previousLabel={<HiChevronLeft />}
            nextLabel={<HiChevronRight />}
            onPageChange={handlePageClick}
            containerClassName={'pagination-ul'}
            activeClassName={'currentPage'}
            previousClassName={'pageLabel-btn'}
            nextClassName={'pageLabel-btn'}
          />
        )}
      </S.PaginationContainer>
    </S.Section>
  );
}

const memoizedSearchUser = memo(SearchUser)
export default memoizedSearchUser;
