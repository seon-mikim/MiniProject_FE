import moment from 'moment';
import * as S from './style';
import { useEffect } from 'react';

interface DateInputProps {
  type: string;
  startDate: Date | null;
  endDate: Date | null;
  count: number;
  setCount: (count: number) => void;
  getFormattedDate : (date: Date) => string;
}

function DateInput({ type, startDate, endDate, count, setCount, getFormattedDate }: DateInputProps) {
  

  useEffect(() => {
    if (startDate && endDate) {
      const start = moment(startDate);
      const end = moment(endDate);

      let count = 0;
      const current = start.clone();

      while (current.isSameOrBefore(end, 'day')) {
        if (current.day() !== 0 && current.day() !== 6) {
          // 주말이 아닌 경우에만 카운트 증가
          count++;
        }
        current.add(1, 'day');
      }

      setCount(count);
    }
  }, [startDate, endDate, setCount]);

  return (
    <>
      <div>
        <S.Label>신청일</S.Label>
        <S.Input value={startDate ? getFormattedDate(startDate) : ''} readOnly />
        {type === 'ANNUAL' && (
          <>
            <S.Label>종료일</S.Label>
            <S.Input value={endDate ? getFormattedDate(endDate) : ''} readOnly />
            <S.Label>
              총 :
              <S.CountInput value={count} readOnly />일
            </S.Label>
          </>
        )}
      </div>
    </>
  );
}

export default DateInput;
