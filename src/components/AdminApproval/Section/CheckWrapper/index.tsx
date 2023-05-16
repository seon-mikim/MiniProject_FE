import React from 'react';
import * as S from './style'
import UserSelect from './UserSelect';
import UserSearchInput from './UserSearchInput';
import MonthCheck from './MonthCheck';
import CheckApproval from './CheckApproval';
import {Props} from '../../../AdminApproval/index'

function CheckWrapper({ handleRequestSelect, handleSelectType, handleInput}:Props) {
  return (
    <S.CheckWrapper>
      <CheckApproval handleRequestSelect={handleRequestSelect} />
      <MonthCheck />
      <UserSelect handleSelectType={handleSelectType}/>
      <UserSearchInput handleInput={handleInput}/>
    </S.CheckWrapper>
  );
}

export default CheckWrapper;
