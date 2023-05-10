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
  image: yup.mixed().required('사진을 입력해주세요'),
  username: yup.string().min(2, '2자 이상 입력해주세요!').required('이름을 입력해주세요'),
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
  } = useForm<onSubmitProps>({ resolver: yupResolver(schema), mode: 'onChange' });

  interface onSubmitProps {
    image: FileList;
    username: string;
    password: string;
    checkpw: string;
    email: string;
    phone: string;
  }

  const onSubmitHandler: SubmitHandler<onSubmitProps> = async (data) => {
    //const reader = new FileReader();

    //reader.readAsDataURL(data.image[0]);
    /*reader.onload = () => {
      console.log(reader.result);
    };*/
    if (data.image) {
      const reqData: RegisterRequest = {
        image: data.image[0] as File,
        signupInDTO: {
          username: data.username,
          password: data.password,
          email: data.email,
          phone: data.phone,
        },
      };

      mutate(reqData);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <S.ImgStyle />
      <S.Input top="421px" type="text" placeholder="name" {...register('username')} />
      {errors.username && <p className="error">{errors.username.message}</p>}
      <S.Input top="494px" type="text" placeholder="email" {...register('email')} />
      {errors.email && <p className="error">{errors.email.message}</p>}
      <S.Input top="567px" type="password" placeholder="********" {...register('password')} />
      {errors.password && <p className="error">{errors.password.message}</p>}
      <S.Input top="640px" type="password" placeholder="********" {...register('checkpw')} />
      <S.Input top="713px" placeholder="010-****-****" {...register('phone')} />
      {errors.phone && <p className="error">{errors.phone.message}</p>}
      <S.Input top="770px" type="file" {...register('image')} />
      <S.signUpButton type="submit">회원가입</S.signUpButton>
    </form>
  );
}

export default RegisterForm;
