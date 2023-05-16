import { useState } from 'react'
import * as S from './style'
import { UserSearchInputProps } from '../../../../../interface/Admin'


function UserSearchInput({handleInput}: UserSearchInputProps) {
 const [searchTerm, setSearchTerm] = useState('')

 const handleChange =(e: { target: { value: string } }) => {
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