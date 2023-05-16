import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UseMutateFunction } from 'react-query';
import * as yup from 'yup';
import * as S from './style';
import { AxiosError } from 'axios';
import { RegisterResponse, RegisterRequest } from '../../interface/Auth';
import Logo from '../../pantry_logo.svg';
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
  checkpw: yup.string().oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다'),
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

  const [imgUrl, setImgUrl] = useState<string>(DEFAULT_PREVIEW_URL);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files?.length) {
      const url = URL.createObjectURL(files[0]);
      setImgUrl(url);
    } else {
      setImgUrl(DEFAULT_PREVIEW_URL);
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
    <div>
      <S.RegisterPageContainer>
        <S.LogoContainer>
          <S.LogoImg src={Logo} />
        </S.LogoContainer>
        <S.RegisterForm onSubmit={handleSubmit(onSubmitHandler)}>
          <S.RegisterTag>Sign Up</S.RegisterTag>
          <S.ImgStyle src={imgUrl} />
          <S.InputContainer>
            <S.Input /*top="421px"*/ type="text" placeholder="name" {...register('username')} />
            {errors.username && <S.ErrorMessage>{errors.username.message}</S.ErrorMessage>}
          </S.InputContainer>
          <S.InputContainer>
            <S.Input /*top="494px"*/ type="text" placeholder="email" {...register('email')} />
            {errors.email && <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>}
          </S.InputContainer>
          <S.InputContainer>
            <S.Input /*top="567px"*/ type="password" placeholder="********" {...register('password')} />
            {errors.password && <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>}
          </S.InputContainer>
          <S.InputContainer>
            <S.Input /*top="640px"*/ type="password" placeholder="********" {...register('checkpw')} />
            {errors.checkpw && <S.ErrorMessage>{errors.checkpw.message}</S.ErrorMessage>}
          </S.InputContainer>
          <S.InputContainer>
            <S.Input /*top="713px"*/ placeholder="010-****-****" {...register('phone')} />
            {errors.phone && <S.ErrorMessage>{errors.phone.message}</S.ErrorMessage>}
          </S.InputContainer>
          <S.fileInputContainer>
            <S.ImgSelection /*top="770px"*/ type="file" {...register('image')} onChange={handleFileChange} />
            {imgUrl === DEFAULT_PREVIEW_URL && <S.ErrorMessage>{errors.image?.message}</S.ErrorMessage>}
          </S.fileInputContainer>
          <S.signUpButton type="submit">SignUp</S.signUpButton>
        </S.RegisterForm>
      </S.RegisterPageContainer>
    </div>
  );
}
export default RegisterForm;
