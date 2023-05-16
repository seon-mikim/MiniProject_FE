import React from 'react';
import * as S from './style'
import UserSelect from './UserSelect';
import UserSearchInput from './UserSearchInput';
import MonthCheck from './MonthCheck';
import CheckApproval from './CheckApproval';
import { CheckWrapperProps } from '../../../../interface/Admin';


function CheckWrapper({ handleEventTypeSelect, handleSelectType, handleInput}:CheckWrapperProps) {
  return (
    <S.CheckWrapper>
      <CheckApproval handleEventTypeSelect={handleEventTypeSelect} />
      <MonthCheck />
      <UserSelect handleSelectType={handleSelectType}/>
      <UserSearchInput handleInput={handleInput}/>
    </S.CheckWrapper>
  );
}

export default CheckWrapper;
