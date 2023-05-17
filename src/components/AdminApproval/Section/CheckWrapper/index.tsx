import React from 'react';
import * as S from './style'
import UserSelect from './UserSelect';
import UserSearchInput from './UserSearchInput';
import MonthCheck from './MonthCheck';
import CheckApproval from './CheckApproval';
import { CheckWrapperProps } from '../../../../interface/Admin';


function CheckWrapper({ handleEventTypeSelect, handleSelectType, handleSearchClick}:CheckWrapperProps) {
  return (
    <S.CheckWrapper>
      <CheckApproval handleEventTypeSelect={handleEventTypeSelect} />
      <MonthCheck />
      <UserSelect handleSelectType={handleSelectType}/>
      <UserSearchInput handleSearchClick={handleSearchClick}/>
    </S.CheckWrapper>
  );
}

export default CheckWrapper;
