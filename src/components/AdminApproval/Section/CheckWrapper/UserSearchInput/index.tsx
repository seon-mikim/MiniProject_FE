import { useRef, useState } from 'react';
import * as S from './style';
import { UserSearchInputProps } from '../../../../../interface/Admin';
import { HiSearch, HiX } from 'react-icons/hi';

function UserSearchInput({ handleSearchClick }: UserSearchInputProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isBlur, setIsBlur] = useState<boolean>(false);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const handleInputReset = () => {
 
    setSearchTerm('')
    handleSearchClick('')
    setIsFocus(false);

  };


  
  return (
    <S.InputWapper>
      {isFocus &&<button onClick={handleInputReset}><HiX/></button>}
      <button onClick={() => handleSearchClick(searchTerm)}><HiSearch/></button>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </S.InputWapper>
  );
}

export default UserSearchInput;
