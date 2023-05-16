import { useState } from 'react'

import * as S from './style'
import { Props } from '../../..'

function UserSearchInput({handleInput}:Props) {
 const [searchTerm, setSearchTerm] = useState('')

 const handleChange =(e:any) => {
  const value = e.target.value
  setSearchTerm(value)
  handleInput?.(value)
 }
  
  return (
    <S.InputWapper>
      <input type="text" value={searchTerm} onChange={handleChange}/>
    </S.InputWapper>
  )
}

export default UserSearchInput