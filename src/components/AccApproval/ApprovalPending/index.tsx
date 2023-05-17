import { useEffect, useRef, useState } from 'react';
import ListItem from '../../common/ListItem';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { AccPendingResponse, approveAcc, approveAccParams, getAccPending } from '../../../api/Admin/accApproval';
import { Role } from '../../../interface/User';
import { SkeletonUI } from '../../common/SkeletonUI/style';

import { formatDate } from '../../../utils/helpers';
import * as S from '../style';
import ReactPaginate from 'react-paginate';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { SearchNotFound } from '../../AdminForm/SearchUser/style';

function ApprovalPending() {
  const [pendingList, setPendingList] = useState<AccPendingResponse[]>([]);
  const [page, setPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const listContainerRef = useRef<HTMLDivElement>(null)

  const queryClient = useQueryClient();

  const { status } = useQuery({
    queryKey: ['admin', 'accPendingList', page],
    queryFn: () => getAccPending(page),
    keepPreviousData: true,
    onSuccess: (response) => {
      setPendingList(response.content);
      setTotalPages(response.totalPages);
    },
  });

  const { mutate } = useMutation(approveAcc, {
    onSettled: () => {
      queryClient.invalidateQueries(['admin', 'accPendingList']);
    },
  });

  type PageChangeEventData = {
    selected: number;
  };

  const handlePageClick = (event: PageChangeEventData) => {
    setPage(event.selected);
  };

  const handleApprove = ({ username, email }: approveAccParams) => {
    mutate({ username, email });
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
              return pendingList.length > 0 ? (
                pendingList.map((listItem: AccPendingResponse, index: number) => (
                  <ListItem
                    key={index}
                    imageUri={listItem.imageUri}
                    username={listItem.username}
                    email={listItem.email}
                    textContent={[
                      <span>{listItem.role === Role.ADMIN ? '관리자' : '사원'}</span>,
                      <span>입사일: {formatDate(listItem.createAt)}</span>,
                    ]}
                    buttons={[
                      {
                        label: '승인',
                        onClick: () =>
                          handleApprove({
                            username: listItem.username,
                            email: listItem.email,
                          }),
                      },
                    ]}
                  />
                ))
              ) : (
                <SearchNotFound>대기 중인 계정이 없습니다.</SearchNotFound>
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

export default ApprovalPending;
