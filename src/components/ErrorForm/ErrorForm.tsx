import React from 'react';
import * as S from './style';
import Logo from '../../pantry_logo.svg';
function ErrorForm() {
  return (
    <div>
      <S.ErrorPageContainer>
        <S.LogoContainer src={Logo}></S.LogoContainer>
        <S.ErrorForm>
          <S.ErrorTag>404</S.ErrorTag>
          <S.ErrorContent>
            <S.topic>Page not found</S.topic>
            <S.main>This page will be routed to index page in a few seconds</S.main>
          </S.ErrorContent>
        </S.ErrorForm>
      </S.ErrorPageContainer>
    </div>
  );
}
export default ErrorForm;
