import React from 'react';
import * as S from './style';
import Logo from '../../pantry_logo.svg';
function ErrorForm() {
  return (
    <div>
      <S.ErrorPageContainer>
        <S.LogoContainer>
          <S.LogoImg src={Logo} />
        </S.LogoContainer>
        <S.ErrorForm>
          <S.ErrorTag>404</S.ErrorTag>
          <S.ErrorContent>
            <S.h2>Page not found</S.h2>
            <S.h2>This page will be routed to index page in a few seconds</S.h2>
          </S.ErrorContent>
        </S.ErrorForm>
      </S.ErrorPageContainer>
    </div>
  );
}
export default ErrorForm;
