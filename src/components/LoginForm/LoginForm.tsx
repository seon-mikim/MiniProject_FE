import React from 'react';
import * as S from './style';
import { UseMutateFunction } from 'react-query';
import { AxiosError } from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router';
import { LoginResponse, LoginRequest } from '../../interface/Auth';
import Logo from '../../pantry_logo.svg';
export interface LoginFormProps {
  mutate: UseMutateFunction<LoginResponse | undefined, AxiosError<unknown, any>, LoginRequest>;
}

const schema = yup.object().shape({
  email: yup.string().email('이메일형식이 적합하지 않습니다.').required('이메일 입력해주세요'),
  password: yup
    .string()
    .min(8, '비밀번호는 최소 8자리입니다!')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*\W)(?!.*\s).{8,}$/,
      '대소문자, 특수문자, 숫자를 모두 포함한 8자리 이상 입력해주세요',
    )
    .required('비밀번호를 입력해주세요'),
});
function LoginForm({ mutate }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>({ resolver: yupResolver(schema), mode: 'onChange' });
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/register');
  };
  const onSubmit: SubmitHandler<LoginRequest> = (data) => {
    mutate(data);
  };

  return (
    <div>
      <S.LoginPageContainer>
        <S.LogoContainer src={Logo} />
        <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
          <S.LoginTag>Login</S.LoginTag>
          <S.emailInput /*top="401px"*/ type="text" placeholder="email" {...register('email')} />
          {errors.email && <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>}
          <S.passwordInput /*top="507px"*/ type="password" placeholder="password" {...register('password')} />
          {errors.password && <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>}
          <S.LoginButton /*top="687px"*/ type="submit">Login</S.LoginButton>
          <S.JoinButton /*top="786px"*/ onClick={onClick}>SignUp</S.JoinButton>
        </S.LoginForm>
      </S.LoginPageContainer>
    </div>
  );
}

export default LoginForm;
