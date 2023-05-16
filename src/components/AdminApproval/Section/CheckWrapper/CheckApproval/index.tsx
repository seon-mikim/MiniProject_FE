import React from 'react';
import * as S from './style';

function CheckApproval({handleRequestSelect}:any) {
  return (
    <div>
      <S.Button color="annual" onClick={()=>handleRequestSelect('annual')}>연차</S.Button>
      <S.Button color="duty"onClick={()=>handleRequestSelect('duty')}>당직</S.Button>
    </div>
  );
}

export default CheckApproval;
