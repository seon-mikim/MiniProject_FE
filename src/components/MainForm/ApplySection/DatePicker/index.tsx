import React from 'react';
import {ko} from 'date-fns/locale';
import * as S from './style';
import moment from 'moment';

interface DatePickerProps {
  type: string;
  startDate: Date | null;
  setStartDate: (date: Date | null) => void;
  endDate: Date | null;
  setEndDate: (date: Date | null) => void;
}

function DatePicker({ type, startDate, setStartDate, endDate, setEndDate}:DatePickerProps) {
  const onChange = (dates: [Date|null, Date|null]) => {
    const [start, end] = dates;
      setStartDate(start? moment(start).toDate() : null);
      setEndDate(end? moment(end).toDate() : null);
  };
  return (
    <>
      {type === 'ANNUAL' ? (
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
        <S.StyledDatePicker
          selected={startDate}
          onChange={(date: Date|null) => setStartDate(date)}
          locale={ko}
          inline
        />
      )}
    </>
  );
}

export default DatePicker;
