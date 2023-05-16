import * as S from './style'
import ApplySection from '../../components/MainForm/ApplySection';
import AnnualSection from '../../components/MainForm/AnnualSection';

function MainPage() {
  return (
    <S.MainPage className="content">
      <AnnualSection />
      <ApplySection />

    </S.MainPage>
  );
}

export default MainPage;
