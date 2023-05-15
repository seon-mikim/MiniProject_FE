import React from 'react';
import * as S from './style';
import moment from 'moment';

export interface eventProps {
  eData: any;
  handleButtonClick: (cardData: eventProps['eData'], status: string) => void;
  breakdownType: string;
}

function Card({ eData, handleButtonClick, breakdownType }: eventProps) {
  const startDate = moment(eData.startDate);
  const endDate = moment(eData.endDate);
 
 
  return (
    <S.Card key={eData.eventId}>
      <S.CardContent>
        <S.UserImgWrap>
          <img src="http://via.placeholder.com/45" alt="" />
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
          {!startDate.isSameOrAfter(endDate) ? (
            <S.EventDate style={{ marginLeft: '60px' }}>{eData.endDate}</S.EventDate>
          ) : (
            <span></span>
          )}
        </S.EventTypeDateWrap>
        <S.CreateDate>
          <span>{eData.createdAt}</span>
        </S.CreateDate>
      </S.CardContent>
      {breakdownType === 'request' ? (
        <S.ButtonArea>
          <S.CheckButton onClick={() => handleButtonClick(eData, 'APPROVED')} color="approve">
            승인
          </S.CheckButton>
          <S.CheckButton onClick={() => handleButtonClick(eData, 'REJECTED')} color="refuse">
            거절
          </S.CheckButton>
        </S.ButtonArea>
      ) : (
        <S.ButtonArea>
          <span>{eData.orderState === 'APPROVED' ? '승인' : '거절'}</span>
        </S.ButtonArea>
      )}
    </S.Card>
  );
}

export default Card;
