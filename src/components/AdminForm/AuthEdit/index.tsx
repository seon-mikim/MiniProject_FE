import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { Button } from '../../common/Button/style';
import * as S from './style';
import { AuthUser, Role } from '../../../interface/User';
import { useMutation, useQueryClient } from 'react-query';

import AlertModal from '../../common/AlertModal';
import ConfirmModal from '../../common/ConfirmModal';
import { CircularLoadingProgress } from '../../common/CircularLoadingProgress/style';
import { updateRole } from '../../../api/Admin/AuthEdit';
import { formatDate, handleImageError } from '../../../utils/helpers';
import { SelectUserDispatchContext, SelectUserStateContext } from '../../../pages/AdminAuthPage';
import { INITIAL_VALUE, RESET_SELECTED_USER } from '../../../reducers/selectUserReducer';
import { showToastSuccess } from '../../common/Tostify';
import { showToastError } from '../../common/Tostify';

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
  // AdminForm 내에서 사용하는 contextAPI, useReducer로 만듬
  const selectedUserState = useContext(SelectUserStateContext);
  const selectedUserDispatch = useContext(SelectUserDispatchContext);

  // search result에서 선택된 유저 상태 관리
  const [editProfile, setEditProfile] = useState<AuthUser>(INITIAL_VALUE);

  // 선택된 유저의 직급 상태 관리
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  // 권한 변경사항 저장하는 버튼 클릭 시 나올 모달 상태 관리
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);
  /**
   * mutate 응답 성공 시 -> 선택된 유저 초기화, 검색 결과 캐싱 staleTime 초기화, 응답 알림 모달 메시지 변경
   * mutate 응답 실패 시 -> 응답 알림 모달 메시지 변경
   */
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(updateRole, {
    onSuccess: (response) => {
      if (selectedUserDispatch) {
        selectedUserDispatch({ type: RESET_SELECTED_USER });
      }
      queryClient.invalidateQueries(['admin', 'search']);
      showToastSuccess( `${response.data.username}님의 권한이 ${
        response.data.role === Role.ADMIN ? '관리자' : '사원으'
      }로 변경되었습니다.`);
    },
    onError: () => {
      showToastSuccess('저장이 실패하였습니다.');
    },
  });

  // 권한 변경 선택용 라디오 버튼 클릭 이벤트
  const handleRadioClick = () => {
    setIsAdmin((prev) => !prev);
  };

  // 저장하기 버튼 클릭 시 이벤트
  const handleSaveClick = () => {
    // 초기값이면 동작 X
    if (editProfile === INITIAL_VALUE) {
      showToastError('변경할 대상을 선택하세요.');
      return;
    }
    // 저장하고자 하는 권한이 선택된 유저 직급에 영향이 없을 경우 동작 X
    if ((editProfile.role === Role.ADMIN) === isAdmin) {
      return;
    }

    // 재확인용 모달 상태 변경
    setIsConfirmModalOpen(true);
  };

  // 재확인용 모달에서 onConfirmClick에 전달될 이벤트 핸들러 함수
  const handleSave = () => {
    mutate({ email: editProfile.email, role: isAdmin ? Role.ADMIN : Role.USER });
    setIsConfirmModalOpen(false);
  };

  // 렌더링 후 선택된 유저 변경 감지 및 상태 변경
  useEffect(() => {
    if (selectedUserState) {
      setEditProfile(selectedUserState);
      setIsAdmin(selectedUserState.role === Role.ADMIN);
    }
  }, [selectedUserState]);

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
      <S.AuthEditSection style={{ position: 'relative' }}>
        {/* header */}
        <S.AuthEditHeader>관리자 권한 수정</S.AuthEditHeader>
        {/* profile img */}
        <S.SelectedUserImg
          src={editProfile.imageUri ? editProfile.imageUri : './default_profile.png'}
          alt="사용자 프로필 사진"
          onError={handleImageError}
        />

        {/* info wrapper subheader > textcontent */}
        <S.InfoWrapper>
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
        </S.InfoWrapper>

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
        <Button size="lg" onClick={handleSaveClick}>
          {isLoading ? <CircularLoadingProgress /> : '저장하기'}
        </Button>
        {/* <Button onClick={handleSaveClick}> <S.CircularLoadingProgress /> </Button> */}
      </S.AuthEditSection>
    </>
  );
}

const MemoizedAuthEdit = React.memo(AuthEdit);

export default MemoizedAuthEdit;
