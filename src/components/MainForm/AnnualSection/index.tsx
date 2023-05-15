import BigCalendar from '../../common/BigCalendar';
import * as S from './style';
import { useState } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import { useQuery } from 'react-query';
import { getEventList } from '../../../api/mainService';
import ListItem from '../../common/ListItem';

interface DataItem {
  eventId: number;
  eventType: string;
  startDate: string;
  endDate: string;
  userName: string;
  userEmail: string;
  userImageUri: string;
}
const Day:{[key:string]:string} = {
  Sunday:'일',
  Monday:'월',
  Tuesday:'화',
  Wednesday:'수',
  Thursday:'목',
  Friday:'금',
  Saturday:'토',
}

function AnnualSection() {
  moment.locale('ko');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [type, setType] = useState('ANNUAL');

  const today = moment();
  const { data } = useQuery(['eventList', type, today.format('YYYY-MM')], () =>
    getEventList(type, today.format('YYYY-MM')),
  );
  function handleModalOpen() {
    setIsModalOpen(true);
  }
  function handleModalClose(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) setIsModalOpen(false);
  }

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { innerText } = e.target as HTMLButtonElement;
    setType(innerText === '연차' ? 'ANNUAL' : 'DUTY');
  };

  const getDayDiff = (startDate:string, endDate:string) => {
    const start = moment(startDate);
    const end = moment(endDate);
    return end.diff(start, 'days')+1;
  };

  const getStartAndEndDayOfWeek = (Date:string) => {
    const DayOfWeek = Day[moment(Date).format('dddd')];

    return DayOfWeek;
  };

  return (
    <>
      {isModalOpen && (
        <S.ModalBackground onClick={handleModalClose}>
          <BigCalendar />
        </S.ModalBackground>
      )}
      <S.Section>
        <S.SectionHeader>
          <S.H2>TODAY: {today.format('YYYY.MM.DD')}</S.H2>
          <S.HeaderRight>
            <S.H2>당직 / 연차 현황</S.H2>
            <S.CalendarIcon onClick={handleModalOpen} />
          </S.HeaderRight>
        </S.SectionHeader>
        <S.ButtonWrap>
          <S.NavButton onClick={onClick} className={type === 'ANNUAL' ? 'active' : ''}>
            연차
          </S.NavButton>
          <S.NavButton onClick={onClick} className={type === 'DUTY' ? 'active' : ''}>
            당직
          </S.NavButton>
        </S.ButtonWrap>
        <S.ListWrap>
          {data && data.length !== 0 ? (
            data.map((item:DataItem) => (
              <ListItem
                key={item.eventId}
                gridColRatio="50px 85px auto"
                imageUri={item.userImageUri}
                username={item.userName}
                email={item.userEmail}
                textContent={[
                  <S.EventBox>{item.eventType === 'ANNUAL' ? '연차' : '당직'}</S.EventBox>,
                  <p>{getDayDiff(item.startDate, item.endDate) + '일'}</p>,
                  <p>
                    {item.startDate} ({getStartAndEndDayOfWeek(item.startDate)}) ~ {item.endDate} (
                    {getStartAndEndDayOfWeek(item.endDate)})
                  </p>,
                ]}
              />
            ))
          ) : (
            <p>일정이 없습니다.</p>
          )}
        </S.ListWrap>
      </S.Section>
    </>
  );
}

export default AnnualSection;
