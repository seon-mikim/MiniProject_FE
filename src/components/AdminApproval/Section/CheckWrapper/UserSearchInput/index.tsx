import { useState } from 'react'
import { RequestProps } from '..'
import * as S from './style'

function UserSearchInput({handleInput}:RequestProps) {
 const [searchTerm, setSearchTerm] = useState('')

 const handleChange =(e) => {
  const value = e.target.value
  setSearchTerm(value)
  handleInput(value)
 }
  
  return (
    <S.InputWapper>
      <input type="text" value={searchTerm} onChange={handleChange}/>
    </S.InputWapper>
  )
}

export default UserSearchInput