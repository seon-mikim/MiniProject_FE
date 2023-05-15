import  ListSection  from '../../components/AccApproval/ListSection';
import * as S from './style';


function AdminAccApprovalPage() {
  
  return (
    <>
      <S.Section className="content">
        <S.SectionHeaderWrapper>
          <S.SectionHeader>계정 승인 현황</S.SectionHeader>
          <S.Divider />
          
        </S.SectionHeaderWrapper>
        <ListSection />
      </S.Section>
    </>
  );
}

export default AdminAccApprovalPage;
