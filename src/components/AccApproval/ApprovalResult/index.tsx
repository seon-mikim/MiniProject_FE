import { useEffect, useRef, useState } from 'react';
import { AuthUser, Role } from '../../../interface/User';
import ListItem from '../../common/ListItem';
import { useQuery } from 'react-query';
import { getApprovedAcc } from '../../../api/Admin/accApproval';
import ReactPaginate from 'react-paginate';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { SkeletonUI } from '../../common/SkeletonUI/style';
import * as S from '../style';
import { formatDate } from '../../../utils/helpers';
import { SearchNotFound } from '../../AdminForm/SearchUser/style';

function ApprovalResult() {
  const [approvedList, setApprovedList] = useState<AuthUser[]>([]);
  const [page, setPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const listContainerRef = useRef<HTMLDivElement>(null)

  const { status } = useQuery({
    queryKey: ['admin', 'approvedAcc', page],
    queryFn: () => getApprovedAcc(page),
    keepPreviousData: true,
    onSuccess: (response) => {
      setApprovedList(response.content);
      setTotalPages(response.totalPages);
    },
  });

  type PageChangeEventData = {
    selected: number;
  };

  const handlePageClick = (event: PageChangeEventData) => {
    setPage(event.selected);
  };
  
  useEffect(() => {
    if(listContainerRef.current) {
      listContainerRef.current.scrollTo(0, 0)
    }
  },[page])

  return (
    <>
      <S.ListContainer ref={listContainerRef}>
        {(() => {
          switch (status) {
            case 'loading':
              return <SkeletonUI />;
            case 'success':
              return approvedList.length > 0 ? (
                approvedList.map((listItem: AuthUser, index: number) => (
                  <ListItem
                    key={index}
                    imageUri={listItem.imageUri}
                    username={listItem.username}
                    email={listItem.email}
                    textContent={[
                      <span>{listItem.role === Role.ADMIN ? '관리자' : '사원'}</span>,
                      <span>입사일: {formatDate(listItem.createAt)}</span>,
                    ]}
                  />
                ))
              ) : (
                <SearchNotFound>승인된 계정이 없습니다.</SearchNotFound>
              );
            default:
              return null;
          }
        })()}
      </S.ListContainer>

      <S.PaginationContainer>
        {totalPages !== 0 && (
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
    </>
  );
}

export default ApprovalResult;
