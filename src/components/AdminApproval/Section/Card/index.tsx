import React from 'react';
import * as S from './style';
import moment from 'moment';


interface eventProps {
  eData: any;
  handleButtonClick?: (cardData, status) => void;
}

function Card({ eData, handleButtonClick }: eventProps) {
  const startDate = moment(eData.startDate);
  const endDate = moment(eData.endDate);

  return (
    <S.Card key={eData.id}>
      <S.CardContent key={eData.eventId}>
        <S.UserImgWrap>
          <img src="http://via.placeholder.com/45" alt="" />
        </S.UserImgWrap>
        <S.UserInfoWrap>
          <S.UserName>{eData.username}</S.UserName>
          <S.UserEmail>{eData.email}</S.UserEmail>
        </S.UserInfoWrap>
        <S.UserRole>{eData.role === 'Admin' ? <span>관리자</span> : <span>사원</span>}</S.UserRole>
        <S.EventTpyeWrap>
          <S.EventType>{eData.eventType}</S.EventType>
        </S.EventTpyeWrap>
        <S.EventTypeDateWrap>
          <S.EventDate>{eData.startDate}</S.EventDate>
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
      <S.ButtonArea>
        <S.CheckButton  onClick={() => handleButtonClick('approve')} color="approve">
          승인
        </S.CheckButton>
        <S.CheckButton onClick={() => handleButtonClick('refuse')} color="refuse">거절</S.CheckButton>
      </S.ButtonArea>
    </S.Card>
  );
}

export default Card;
