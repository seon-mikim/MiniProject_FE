import React, { useState } from 'react';
import * as S from './style';
import DatePicker from './DatePicker';
import DateInput from './DateInput';
import moment from 'moment';
import { eventOrder } from '../../../api/mainService';
import { useMutation } from 'react-query';
import ConfirmModal from '../../common/ConfirmModal';
import { showToastError } from '../../common/Tostify';

function ApplySection() {
  const [type, setType] = useState('ANNUAL');
  const [startDate, setStartDate] = useState<Date | null>(moment().toDate());
  const [endDate, setEndDate] = useState<Date | null>(moment().toDate());
  const [count, setCount] = useState(1);
  const [modal, setModal] = useState(false);

  const { mutate } = useMutation(eventOrder, {
    onSuccess: (data) => {
      console.log(data);
      setModal(false);
    },
  });

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { innerText } = e.target as HTMLButtonElement;
    setType(innerText === '연차' ? 'ANNUAL' : 'DUTY');
  };

  const onSubmit = () => {
    if (startDate && endDate) {
      const today = moment().startOf('day');
      const selectedStartDate = moment(startDate).startOf('day');

      if (selectedStartDate.isBefore(today)) {
        showToastError('오늘보다 이전 날짜는 선택할 수 없습니다.')
        setModal(false);
        return;
      }

      mutate({
        startDate,
        endDate,
        eventType: type,
        count,
      });
    }
  };

  const getFormattedDate = (date: Date | null) => {
    return moment(date).format('YYYY/MM/DD');
  };

  return (
    <S.AnnualSection>
      <S.AnnualTab onClick={onClick} className={type === 'ANNUAL' ? 'active' : ''}>
        연차
      </S.AnnualTab>
      <S.WorkTab onClick={onClick} className={type === 'DUTY' ? 'active' : ''}>
        당직
      </S.WorkTab>
      <S.Form>
        <DatePicker
          type={type}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
        <S.Container>
          <DateInput
            type={type}
            startDate={startDate}
            endDate={endDate}
            count={count}
            setCount={setCount}
            getFormattedDate={getFormattedDate}
          />
          <S.FormBtn onClick={() => setModal(true)}>신청</S.FormBtn>
          {modal &&
            (type === 'ANNUAL' ? (
              <ConfirmModal
                title={'연차'}
                subTitle={`${getFormattedDate(startDate)} - ${getFormattedDate(endDate)}`}
                textContent={'해당 내용으로 신청하시겠습니까?'}
                onConfirm={onSubmit}
                onCancel={() => setModal(false)}
              />
            ) : (
              <ConfirmModal
                title={'당직'}
                subTitle={`${getFormattedDate(startDate)}`}
                textContent={'해당 내용으로 신청하시겠습니까?'}
                onConfirm={onSubmit}
                onCancel={() => setModal(false)}
              />
            ))}
        </S.Container>
      </S.Form>
    </S.AnnualSection>
  );
}
export default ApplySection;
