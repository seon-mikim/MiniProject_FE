import { useState } from 'react';
import ListItem from '../../common/ListItem';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { AccPendingResponse, approveAcc, approveAccParams, getAccPending } from '../../../api/Admin/accApproval';
import { Role } from '../../../interface/User';
import { SkeletonUI } from '../../common/SkeletonUI/style';

function ApprovalPending() {
  const [pendingList, setPendingList] = useState<AccPendingResponse[]>([]);
  const queryClient = useQueryClient();
  const { status } = useQuery(['admin', 'accPendingList'], getAccPending, {
    onSuccess: (data) => {
      setPendingList(data);
    },
  });
  const { mutate } = useMutation(approveAcc, {
    onSettled: () => {
      queryClient.invalidateQueries(['admin', 'accPendingList']);
    },
  });
  const handleApprove = ({ username, email }: approveAccParams) => {
    mutate({ username, email });
  };

  return (
    <>
      {status === 'loading' ? (
        <SkeletonUI />
      ) : (
        pendingList &&
        status === 'success' &&
        pendingList.map((listItem: AccPendingResponse, index: number) => (
          <ListItem
            key={index}
            imageURI="./default_profile.png"
            username={listItem.username}
            email={listItem.email}
            textContent={[`${listItem.role === Role.ADMIN ? '관리자' : '사원'}`, `입사일: ${new Date(listItem.createAt).toLocaleDateString()}`]}
            buttons={[
              { label: '승인', onClick: () => handleApprove({ username: listItem.username, email: listItem.email }) },
            ]}
          />
        ))
      )}
    </>
  );
}

export default ApprovalPending;
