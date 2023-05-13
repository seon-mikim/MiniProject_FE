import * as S from './style';
import React, { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import SearchResultList from './SearchResultList';
import SearchArea from './SearchArea';
import { AuthUser } from '../../../interface/User';
import { searchUser } from '../../../api/Admin/SearchUser';
import ReactPaginate from 'react-paginate';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { SearchType, SearchUserParams } from '../../../interface/Search';
import { SkeletonUI } from '../../common/SkeletonUI/style';

const initialValue: SearchUserParams = {
  type: SearchType.USERNAME,
  keyword: '',
};

const PAGE_SIZE = 10

function SearchUser() {
  const [filteredList, setFilteredList] = useState<AuthUser[]>([]);
  const [searchParams, setSearchParams] = useState(initialValue);
  const [page, setPage] = useState<number>(0);
  const queryClient = useQueryClient();

  // useQuery로 데이터 페칭 및 케싱
  const { status, data, isPreviousData } = useQuery({
    queryKey: ['admin', 'search', searchParams, page],
    queryFn: () => searchUser({ size: PAGE_SIZE, type: searchParams.type, keyword: searchParams.keyword, page }),
    keepPreviousData: true,
    onSuccess: (data) => {
      setFilteredList(data.content);
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
        queryKey: ['admin', 'search', searchParams,  page + 1],
        queryFn: () => searchUser({ size: PAGE_SIZE, type: searchParams.type, keyword: searchParams.keyword, page: page + 1 }),
      });
    }
  }, [page, queryClient, isPreviousData, data]);

  const onSearchClick = ({ type, keyword }: SearchUserParams) => {
    setSearchParams({ type, keyword });
    
  };


  type PageChangeEventData = {
    selected: number;
  };

  const handlePageClick = (event: PageChangeEventData) => {
    setPage(event.selected);
  };

  return (
    <S.Section>
      {/* search area header */}
      <S.SearchHeader>사원 검색</S.SearchHeader>
      <S.Divider />
      {/* search input area */}

      <SearchArea onSearchClick={onSearchClick} />
      {/* <S.Divider /> */}

      {/* search result area */}

        {status === 'loading' && <SkeletonUI />}
        {!(status === 'loading') && (filteredList?.length === 0 || !filteredList) ? (
          <S.SearchNotFound>
            <span>검색 결과가 없습니다.</span>
          </S.SearchNotFound>
        ) : (
          <SearchResultList isPreview={false} searchResult={filteredList} />
        )}
  

      <S.PaginationContainer style={{ width: '100%' }}>
        <ReactPaginate
          pageCount={data?.totalPages}
          pageRangeDisplayed={10}
          previousLabel={<HiChevronLeft />}
          nextLabel={<HiChevronRight />}
          onPageChange={handlePageClick}
          containerClassName={'pagination-ul'}
          activeClassName={'currentPage'}
          previousClassName={'pageLabel-btn'}
          nextClassName={'pageLabel-btn'}
        />
      </S.PaginationContainer>
    </S.Section>
  );
}

export default SearchUser;
