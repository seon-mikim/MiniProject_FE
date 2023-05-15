import React from 'react';
import * as S from './style'
import UserSelect from './UserSelect';
import UserSearchInput from './UserSearchInput';
import MonthCheck from './MonthCheck';
import CheckApproval from './CheckApproval';
import {Props} from '../index'

export type RequestProps = Pick<Props, 'handleRequestSelect'>

function CheckWrapper({ handleRequestSelect}:RequestProps) {
  return (
    <S.CheckWrapper>
      <CheckApproval handleRequestSelect={handleRequestSelect} />
      <MonthCheck />
      <UserSelect />
      <UserSearchInput />
    </S.CheckWrapper>
  );
}

export default CheckWrapper;
