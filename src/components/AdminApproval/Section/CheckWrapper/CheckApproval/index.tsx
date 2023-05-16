import * as S from './style'
import { CheckApprovalProps } from '../../../../../interface/Admin';

function CheckApproval({ handleEventTypeSelect}:CheckApprovalProps) {

  return (
    <div>
      <S.Button color="annual" onClick={()=> handleEventTypeSelect('annual')}>연차</S.Button>
      <S.Button color="duty"onClick={()=> handleEventTypeSelect('duty')}>당직</S.Button>
    </div>
  );
}

export default CheckApproval;
