import { listContent } from '../../../interface/User'
import MyListElement from '../MyListElement'
import * as S from './style'

function MyList({title, myList}: {title: string, myList: listContent[] | []}) {


  return (
    <S.backgroundDiv>
      <S.titleSpan>{title}</S.titleSpan>
      <S.contentBackgroundDiv>
        {myList.length !== 0 ? myList.map((data: listContent)=>(
          <MyListElement key={data.eventId} myElement={data}/>
          )) : <S.emptySpan>{title}이 없습니다</S.emptySpan>}
      </S.contentBackgroundDiv>
    </S.backgroundDiv>
  )
}

export default MyList