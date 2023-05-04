import React from 'react';
import * as S from './style'
import UserSelect from './UserSelect';
import UserSearchInput from './UserSearchInput';
import MonthCheck from './MonthCheck';
import CheckApproval from './CheckApproval';

function CheckWrapper() {
  return (
    <S.CheckWrapper>
      <CheckApproval />
      <MonthCheck />
      <UserSelect />
      <UserSearchInput />
    </S.CheckWrapper>
  );
}

export default CheckWrapper;
