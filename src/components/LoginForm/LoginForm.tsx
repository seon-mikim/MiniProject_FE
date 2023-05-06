import React from 'react';
import * as S from './style';
import { UseMutateFunction } from 'react-query';
import { AxiosError } from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router';
import { AuthResponse, LoginRequest } from '../../interface/Auth';

export interface LoginFormProps {
  mutate: UseMutateFunction<AuthResponse | undefined, AxiosError<unknown, any>, LoginRequest>;
}

const schema = yup.object().shape({
  email: yup.string().email('이메일형식이 적합하지 않습니다.').required('이메일 입력해주세요'),
  pw: yup
    .string()
    .min(8, '비밀번호는 최소 8자리입니다!')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)(?!.*\s).{8,}$/,
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
    console.log(data);
    mutate(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Input top="401px" type="text" placeholder="email" {...register('email')} />
        {errors.email && <p className="error">{errors.email.message}</p>}
        <S.Input top="507px" type="password" placeholder="password" {...register('pw')} />
        {errors.pw && <p className="error">{errors.pw.message}</p>}
        <S.Button top="687px" background="#856e5f" type="submit">
          로그인
        </S.Button>
      </form>
      <S.Button top="786px" background="#5e463c" onClick={onClick}>
        회원가입
      </S.Button>
    </div>
  );
}

export default LoginForm;
