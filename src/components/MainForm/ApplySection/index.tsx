import React, { useState } from 'react';
import * as S from './style';
import ko from 'date-fns/locale/ko';

function ApplySection() {
  const [type, setType] = useState('annual');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { innerText } = e.target as HTMLButtonElement;
    setType(innerText === '연차' ? 'annual' : 'work');
  };
  const onChange = (dates: Date[]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const getFormattedDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}/${month < 10 ? `0${month}` : month}/${day < 10 ? `0${day}` : day}`;
  };
  return (
    <S.AnnualSection>
      <S.AnnualTab onClick={onClick} className={type === 'annual' ? 'active' : ''}>
        연차
      </S.AnnualTab>
      <S.WorkTab onClick={onClick} className={type === 'work' ? 'active' : ''}>
        당직
      </S.WorkTab>
      <S.Form>
        {type === 'annual' ? (
          <S.StyledDatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            locale={ko}
            inline
          />
        ) : (
          <S.StyledDatePicker selected={startDate} onChange={setStartDate} locale={ko} inline />
        )}
        <div>
          <S.Label>신청일</S.Label>
          <S.Input value={startDate ? getFormattedDate(startDate) : ''} readOnly />
        {type === 'annual' && (
          <>
            <S.Label>종료일</S.Label>
            <S.Input value={endDate ? getFormattedDate(endDate) : ''} readOnly />
          </>
        )}
        </div>
        <S.FormBtn type="submit">신청</S.FormBtn>
      </S.Form>
    </S.AnnualSection>
  );
}
export default ApplySection;
