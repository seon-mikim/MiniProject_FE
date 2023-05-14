import { useMutation, useQueryClient } from 'react-query'
import { cancelEventType } from '../../../../interface/User'
import * as S from './style'
import { cancelEvent } from '../../../../api/mypage'

function CancelButton({eventEl}: {eventEl: cancelEventType}) {
  const queryClient = useQueryClient()
  const {mutate, isLoading, error} = useMutation(cancelEvent, {
    onSuccess: () => {
      queryClient.invalidateQueries(eventEl.eventType)
    }
  })

  const isCancled = () => {
    window.alert('취소 되었습니다')
    mutate(eventEl)
  }

  if(isLoading) return <>로딩 중...</>
  if(error) return <>에러...</>
  return (
    <button onClick={isCancled}>취소하기</button>
  )
}

export default CancelButton