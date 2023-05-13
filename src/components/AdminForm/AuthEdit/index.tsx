import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { Button } from '../../common/Button/style';
import * as S from './style';
import { AuthUser, Role } from '../../../interface/User';
import SelectUserContext, { INITIAL_VALUE } from '../../../contexts/SelectUserContext';
import { useMutation, useQueryClient } from 'react-query';

import AlertModal from '../../common/AlertModal';
import ConfirmModal from '../../common/ConfirmModal';
import { CircularLoadingProgress } from '../../common/CircularLoadingProgress/style';
import { updateRole } from '../../../api/Admin/AuthEdit';
import { formatDate, handleImageError } from '../../../utils/helpers';

/**
 * 관리자 권한 수정 컴포넌트
 * SearchUser에서 SearchResultList의 ListItem 클릭 시 contextAPI의 selectedUser를 구독하여
 * 변경 시 마다 editProfile의 상태를 변경합니다.
 *
 * 권한 변경 시에 mutate를 사용하여 변경 요청을 하고 SearchUser의 리스트를 invalidate시킵니다.
 *
 * @useState editProfile contextAPI에서 구독하는 setSelectedUser를 통해 렌더링 후 상태변경 관리
 * @useState isAdmin contextAPI에서 구독하는 selectedUser를 통해 렌더링 후 상태변경 관리
 * @useState isConfirmModalOpen 권한 변경 저장하기 버튼 클릭 시 확인할 모달창 상태변경 관리
 * @useState isAlertModalOpen editProfile의 상태가 INITIAL_VALUE 일 때 사용자 미선택 알림
 *
 * @mutate updateRole ['admin', 'users'] invalidate
 *
 */
function AuthEdit() {
  const context = useContext(SelectUserContext);

  const [editProfile, setEditProfile] = useState<AuthUser>(INITIAL_VALUE);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState<boolean>(false);

  const [isResponseModalOpen, setIsResponseModalOpen] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<ReactNode>(<></>);

  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(updateRole, {
    onSuccess: (response) => {
      if (context) {
        context.setSelectedUser(INITIAL_VALUE);
      }
      queryClient.invalidateQueries(['admin', 'search']);
      setResponseMessage(
        <>
          <p>변경 사항이 저장되었습니다</p>
          <p>이름: {response.data.username}</p>
          <p>이메일: {response.data.email}</p>
          <p>변경된 권한: {response.data.role === Role.ADMIN ? '관리자' : '사원'}</p>
          <p>수정된 날짜: {formatDate(new Date().toString())}</p>
        </>,
      );
      setIsResponseModalOpen(true);
    },
    onError: () => {
      setResponseMessage(<span>저장에 실패하였습니다.</span>);
      setIsResponseModalOpen(true);
    },
  });

  const handleRadioClick = () => {
    setIsAdmin((prev) => !prev);
  };

  // 고쳐야지
  const handleSaveClick = () => {
    if (editProfile === INITIAL_VALUE) {
      setIsAlertModalOpen(true);
      return;
    }
    if ((editProfile.role === Role.ADMIN) === isAdmin){
      return;
    }
    setIsConfirmModalOpen(true);
  };
  const handleSave = () => {
    mutate({ email: editProfile.email, role: isAdmin ? Role.ADMIN : Role.USER });
    setIsConfirmModalOpen(false);
  };

  useEffect(() => {
    if (context) {
      setEditProfile(context.selectedUser);
      setIsAdmin(context.selectedUser.role === Role.ADMIN);
    }
  }, [context]);

  return (
    <>
      {isConfirmModalOpen && (
        <ConfirmModal
          title={`이름: ${editProfile.username}`}
          subTitle={`수정할 권한: ${isAdmin ? '관리자' : '사원'}`}
          textContent="해당 내용을 승인 하시겠습니까?"
          onConfirm={handleSave}
          onCancel={() => setIsConfirmModalOpen(false)}
        />
      )}
      {isAlertModalOpen && (
        <AlertModal onConfirmClick={() => setIsAlertModalOpen(false)} message="사용자를 선택해주세요" />
      )}
      {isResponseModalOpen && (
        <AlertModal onConfirmClick={() => setIsResponseModalOpen(false)} message={responseMessage} />
      )}
      <S.AuthEditSection style={{ position: 'relative' }}>
        {/* <AlertModal isOpen title='' message='회원 가입시 관리자의 승인이 필요합니다.'/> */}
        {/* header */}
        <S.AuthEditHeader>관리자 권한 수정</S.AuthEditHeader>
        {/* profile img */}
        <S.SelectedUserImg
          src={editProfile.imageUri ? editProfile.imageUri : './default_profile.png'}
          alt="사용자 프로필 사진"
          onError={handleImageError}
        />

        {/* info wrapper subheader > textcontent */}
        <S.SubHeader>
          이름 <S.TextContent>{editProfile.username}</S.TextContent>
        </S.SubHeader>

        <S.SubHeader>
          이메일 <S.TextContent>{editProfile.email}</S.TextContent>
        </S.SubHeader>

        <S.SubHeader>
          권한
          <S.TextContent>
            {(() => {
              switch (editProfile.role) {
                case Role.ADMIN:
                  return '관리자';
                case Role.USER:
                  return '사원';
                case Role.UNDETERMINED:
                  return '';
                default:
                  throw new Error('Invalid Role');
              }
            })()}
          </S.TextContent>
        </S.SubHeader>

        {/* subheader > radio input 2e */}
        <S.SubHeader>권한 수정 선택</S.SubHeader>
        <S.AuthControlContainer>
          <S.RadioCard htmlFor="auth-radio-admin">
            <S.RadioInput
              onChange={handleRadioClick}
              value={Role.ADMIN}
              checked={editProfile.role !== Role.UNDETERMINED ? isAdmin : false}
              id="auth-radio-admin"
              name="auth-radio"
              type="radio"
            />
            <span>관리자</span>
          </S.RadioCard>
          <S.RadioCard htmlFor="auth-radio-user">
            <S.RadioInput
              onChange={handleRadioClick}
              value={Role.USER}
              checked={editProfile.role !== Role.UNDETERMINED ? !isAdmin : false}
              id="auth-radio-user"
              name="auth-radio"
              type="radio"
            />

            <span>사원</span>
          </S.RadioCard>
        </S.AuthControlContainer>

        {/* 저장 누르면 useMutate=> invalidateuqery로 userList 업데이트 */}
        <Button onClick={handleSaveClick}>{isLoading ? <CircularLoadingProgress /> : '저장하기'}</Button>
        {/* <Button onClick={handleSaveClick}> <S.CircularLoadingProgress /> </Button> */}
      </S.AuthEditSection>
    </>
  );
}

const MemoizedAuthEdit = React.memo(AuthEdit);

export default MemoizedAuthEdit;
