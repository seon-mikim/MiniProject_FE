import AnnualList from './AnnualCard';
import BigCalendar from '../../common/BigCalendar';
import * as S from './style';
import { useState } from 'react';
import moment from 'moment';
import { useQuery } from 'react-query';
import { getEventList } from '../../../api/mainService';
import ListItem from '../../common/ListItem';

function AnnualSection() {
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
        <S.ListWrap >
          {data && data.length !== 0 ? (
            data.map((item: any) => (
              <ListItem
                key={item.eventId}
                imageUri={item.userImageUri ? item.userImageUri :'./default_profile.png'}
                username={item.userName}
                email={item.userEmail}
                textContent={[
                  <p>
                    {item.startDate} ~ {item.endDate}
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
