import { useState } from 'react';
import { AuthUser, Role } from '../../../interface/User';
import ListItem from '../../common/ListItem';
import { useQuery } from 'react-query';
import { getApprovedAcc } from '../../../api/Admin/accApproval';
import ReactPaginate from 'react-paginate';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { SkeletonUI } from '../../common/SkeletonUI/style';
import * as S from '../style';
import { formatDate } from '../../../utils/helpers';

function ApprovalResult() {
  const [approvedList, setApprovedList] = useState<AuthUser[]>([]);
  const [page, setPage] = useState<number>(0);

  const { status, data } = useQuery({
    queryKey: ['admin', 'approvedAcc', page],
    queryFn: () => getApprovedAcc(page),
    keepPreviousData: true,
    onSuccess: (response) => {
      setApprovedList(response.content);
      console.log(response);
    },
  });

  type PageChangeEventData = {
    selected: number;
  };

  const handlePageClick = (event: PageChangeEventData) => {
    setPage(event.selected);
  };

  return (
    <>
      <S.ListContainer>
        {status === 'loading' && <SkeletonUI />}
        {approvedList &&
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
          ))}
      </S.ListContainer>
      <S.PaginationContainer>
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
    </>
  );
}

export default ApprovalResult;
