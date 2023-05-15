import React from 'react';
import * as S from './style'
import { RequestProps } from '..';


function CheckApproval({handleRequestSelect}:RequestProps) {
  return (
    <div>
      <S.Button color="annual" onClick={()=>handleRequestSelect('annual')}>연차</S.Button>
      <S.Button color="duty"onClick={()=>handleRequestSelect('duty')}>당직</S.Button>
    </div>
  );
}

export default CheckApproval;
