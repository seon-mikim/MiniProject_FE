import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UseMutateFunction } from 'react-query';
import * as yup from 'yup';
import * as S from './style';
import { AxiosError } from 'axios';
import { AuthResponse, RegisterRequest } from '../../interface/Auth';

export interface RegisterFormProps {
  mutate: UseMutateFunction<AuthResponse | undefined, AxiosError<unknown, any>, RegisterRequest>;
}

const schema = yup.object().shape({
  name: yup.string().min(2, '2자 이상 입력해주세요!').required('이름을 입력해주세요'),
  email: yup.string().email('이메일형식이 적합하지 않습니다.').required('이메일 입력해주세요'),
  password: yup
    .string()
    .min(8, '비밀번호는 최소 8자리입니다!')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*\W)(?!.*\s).{8,}$/,
      '대소문자, 특수문자, 숫자를 모두 포함한 8자리 이상 입력해주세요',
    )
    .required('비밀번호를 입력해주세요'),
  checkpw: yup
    .string()
    .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다')
    .required('비밀번호를 한번 더 입력해주세요'),
  phone: yup
    .string()
    .matches(/^010-\d{4}-\d{4}$/, '010-****-**** 형식으로 입력해주세요')
    .required('010-****-**** 형식으로 입력해주세요'),
});
function RegisterForm({ mutate }: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterRequest>({ resolver: yupResolver(schema), mode: 'onChange' });
  console.log(errors);
  const onSubmitHandler: SubmitHandler<RegisterRequest> = async (data) => {
    console.log(data);
    mutate(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <S.Input top="421px" type="text" placeholder="name" {...register('name')} />
      {errors.name && <p className="error">{errors.name.message}</p>}
      <S.Input top="494px" type="text" placeholder="email" {...register('email')} />
      {errors.email && <p className="error">{errors.email.message}</p>}
      <S.Input top="567px" type="password" placeholder="********" {...register('password')} />
      {errors.password && <p className="error">{errors.password.message}</p>}
      <S.Input top="640px" type="password" placeholder="********" {...register('checkpw')} />
      <S.Input top="713px" placeholder="010-****-****" {...register('phone')} />
      {errors.phone && <p className="error">{errors.phone.message}</p>}
      <S.signUpButton type="submit">회원가입</S.signUpButton>
    </form>
  );
}

export default RegisterForm;
