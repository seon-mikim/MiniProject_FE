import AnnualList from './AnnualCard';
import * as S from './style';


function AnnualSection() {
  const today = new Date(); 

  function formatDate(date : Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}. ${month}. ${day}`;
  }

  return (
    <S.Section>
      <S.SectionHeader>
        <S.H2>Today: {formatDate(today)}</S.H2>
        <S.HeaderRight>
          <S.H2>당직 / 연차 현황</S.H2>
          <S.CalendarIcon/>
        </S.HeaderRight>
      </S.SectionHeader>
      <S.ButtonWrap>
        <S.NavButton className='active'>연차</S.NavButton>
        <S.NavButton>당직</S.NavButton>
      </S.ButtonWrap>
      <S.ListWrap>
        <AnnualList/>
        <AnnualList/>
        <AnnualList/>
        <AnnualList/>
        <AnnualList/>
        <AnnualList/>
      </S.ListWrap>
    </S.Section>
  );
}

export default AnnualSection;
