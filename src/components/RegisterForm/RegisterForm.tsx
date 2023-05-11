import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UseMutateFunction } from 'react-query';
import * as yup from 'yup';
import * as S from './style';
import { AxiosError } from 'axios';
import { RegisterResponse, RegisterRequest } from '../../interface/Auth';
export interface RegisterFormProps {
  mutate: UseMutateFunction<RegisterResponse | undefined, AxiosError<unknown, any>, RegisterRequest>;
}
const schema = yup.object().shape({
  image: yup
    .mixed()
    .test('Upload', '사진을 업로드 해주세요', (value) => {
      return value instanceof FileList && value[0] !== undefined;
    })
    .test('Type', 'JPG, JPEG, PNG 등 이미지 파일만 가능합니다.', (value) => {
      return value instanceof FileList && value[0]?.type.startsWith('image/');
    }),
  //
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

interface onSubmitProps {
  image: FileList;
  username: string;
  password: string;
  checkpw: string;
  email: string;
  phone: string;
}

const DEFAULT_PREVIEW_URL = './default_profile.png';
function RegisterForm({ mutate }: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<onSubmitProps>({ resolver: yupResolver(schema), mode: 'onChange' });

  const [previewImgUrl, setPreviewImgUrl] = useState<string>(DEFAULT_PREVIEW_URL);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const url = URL.createObjectURL(files[0]);
      setPreviewImgUrl(url);
    } else {
      setPreviewImgUrl(DEFAULT_PREVIEW_URL);
    }
  };
  const onSubmitHandler: SubmitHandler<onSubmitProps> = async (data) => {
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
      <S.ImgStyle src={previewImgUrl} />
      <S.Input top="421px" type="text" placeholder="name" {...register('username')} />
      {errors.username && <p className="error">{errors.username.message}</p>}
      <S.Input top="494px" type="text" placeholder="email" {...register('email')} />
      {errors.email && <p className="error">{errors.email.message}</p>}
      <S.Input top="567px" type="password" placeholder="********" {...register('password')} />
      {errors.password && <p className="error">{errors.password.message}</p>}
      <S.Input top="640px" type="password" placeholder="********" {...register('checkpw')} />
      <S.Input top="713px" placeholder="010-****-****" {...register('phone')} />
      {errors.phone && <p className="error">{errors.phone.message}</p>}
      <S.Input top="770px" type="file" {...register('image')} onChange={handleFileChange} />
      {/* 에러 메시지 추가 했습니다. */}
      {errors.image && <p className="error">{errors.image.message}</p>}
      <S.signUpButton type="submit">회원가입</S.signUpButton>
    </form>
  );
}
export default RegisterForm;
