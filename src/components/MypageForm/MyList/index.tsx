import MyListElement from '../MyListElement'
import * as S from './style'

function MyList({title}: {title: string}) {
  return (
    <div>
      <span>{title}</span>
      <MyListElement />
    </div>
  )
}

export default MyList