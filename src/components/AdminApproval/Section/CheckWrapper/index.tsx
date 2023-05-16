import React from 'react';
import * as S from './style'
import UserSelect from './UserSelect';
import UserSearchInput from './UserSearchInput';
import MonthCheck from './MonthCheck';
import CheckApproval from './CheckApproval';
import {Props} from '../../index'

export type RequestProps = Pick<Props, 'handleRequestSelect'| 'handleSelectType' |'handleInput' >

function CheckWrapper({ handleRequestSelect, handleSelectType, handleInput}:RequestProps) {
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
