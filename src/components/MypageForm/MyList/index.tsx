import { listContent } from '../../../interface/User'
import MyListElement from '../MyListElement'
import * as S from './style'

function MyList({title, myList}: {title: string, myList: listContent[] | []}) {


  return (
    <div>
      <span>{title}</span>
      <div>
        {myList ? myList.map((data: listContent)=>(
          <MyListElement key={data.eventId} myElement={data}/>
          )) : <span>{title}이 없습니다</span>}
      </div>
    </div>
  )
}

export default MyList