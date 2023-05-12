import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { searchUser } from '../../../api/Admin/SearchUser'
import { AuthUser } from '../../../interface/User'
import ListItem from '../../common/ListItem'

function ApprovalResult() {
  const [approvedList, setApprovedList] = useState<AuthUser[]>([])
  // const { status } = useQuery(['admin','auth','users'], searchUser, {
  //   onSuccess: (data) => {
  //     setApprovedList(data)
  //   }
  // })

  // if (status === 'loading') return <>로딩중</>;
  // if (status === 'error') return <>요청 실패</>;

  return (
    <div>
    {approvedList &&
      approvedList.map((listItem: AuthUser, index: number) => (
        <ListItem
          key={index}
          imageURI="./default_profile.png"
          username={listItem.username}
          email={listItem.email}
          textContent={[`${listItem.role}`, `${listItem.createAt}`]}
        />
      ))}
  </div>
  )
}

export default ApprovalResult

// const {
//   data,
//   fetchNextPage,
//   hasNextPage,
//   isFetching,
//   isFetchingNextPage,
//   isError,
// } = useInfiniteQuery('myData', fetchData, {
//   getNextPageParam: (lastPage, allPages) => lastPage.nextPage,
// });

// const handleScroll = () => {
//   if (
//     window.innerHeight + window.scrollY >=
//       document.body.scrollHeight - 10 &&
//     hasNextPage &&
//     !isFetchingNextPage
//   ) {
//     fetchNextPage();
//   }
// };

// useEffect(() => {
//   window.addEventListener('scroll', handleScroll);
//   return () => window.removeEventListener('scroll', handleScroll);
// }, [handleScroll]);
