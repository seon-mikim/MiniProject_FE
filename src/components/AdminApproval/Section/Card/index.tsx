import React from 'react';
import * as S from './style';
import moment from 'moment';
import { handleImageError } from '../../../../utils/helpers';
import { eventProps } from '../../../../interface/Admin';




function Card({ eData, handleButtonClick, breakdownType }: eventProps) {
  const startDate = moment(eData.startDate);
  const endDate = moment(eData.endDate);
  return (
    <S.Card key={eData.eventId}>
      <S.CardContent>
        <S.UserImgWrap>
          <img src={eData.thumbnailUri} onError={handleImageError} alt="" />
        </S.UserImgWrap>
        <S.UserInfoWrap>
          <S.UserName>{eData.userName}</S.UserName>
          <S.UserEmail>{eData.userEmail}</S.UserEmail>
        </S.UserInfoWrap>
        <S.UserRole>{eData.userRole === 'Admin' ? <span>관리자</span> : <span>사원</span>}</S.UserRole>
        <S.EventTpyeWrap>
          <S.EventType>{eData.eventType === 'ANNUAL' ? '연차' : '당직'}</S.EventType>
        </S.EventTpyeWrap>
        <S.EventTypeDateWrap>
          <S.EventDate>{eData.eventType === 'ANNUAL' ? eData.startDate : eData.date}</S.EventDate>
          <S.EventDate>{!startDate.isSameOrAfter(endDate) ?eData.endDate: <pre style={{whiteSpace:'pre'}}>                  </pre> } </S.EventDate>
          
        </S.EventTypeDateWrap>
        <S.CreateDate>
          <span>{moment(eData.createdAt).format('YYYY-MM-DD HH:mm:ss').toLocaleString()}</span>
        </S.CreateDate>
      </S.CardContent>
      {breakdownType === 'request' ? (
        <S.ButtonArea>
          <S.CheckButton onClick={() => handleButtonClick?.(eData, 'APPROVED')} color="approve">
            승인
          </S.CheckButton>
          <S.CheckButton onClick={() => handleButtonClick?.(eData, 'REJECTED')} color="refuse">
            거절
          </S.CheckButton>
        </S.ButtonArea>
      ) : (
        <S.ButtonArea >
          <div>{eData.orderState === 'APPROVED' ? '승인' : '거절'}</div>
        </S.ButtonArea>
      )}
    </S.Card>
  );
}

export default Card;
