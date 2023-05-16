import { useState, useEffect, useRef } from 'react'
import { User, setMyinfoData } from '../../../interface/User'
import * as S from './style'
import { useForm } from 'react-hook-form'
import { modifyInDTOType } from '../../../interface/User'
import { useMutation, useQueryClient } from 'react-query'
import { setMyInfo } from '../../../api/mypage'
import { handleImageError } from '../../../utils/helpers'
import { FiEdit } from 'react-icons/fi'
import AlertModal from '../../common/AlertModal'

interface mypageForm {
  username: string,
  phone: string,
  password: string,
  passwordCheck: string,
  imageChange?: object | string
}

function MyInfo({username, email, phone, imageUri, role}: 
  {username: string | undefined, email: string | undefined, phone: string | undefined, imageUri: string | undefined, role: string | undefined}) {
  const queryClient = useQueryClient()
  const { mutate, isLoading, error } = useMutation(setMyInfo, {
    onSuccess: () => {
      queryClient.invalidateQueries('myinfo')
    }
  })

  const { register, watch, handleSubmit, resetField, formState: { errors} } = useForm({
    defaultValues: {
      username: username,
      phone: phone,
      password: '',
      passwordCheck: '',
      imageChange: ''
    }
  })

  const src = useRef<any>()
  src.current = watch('imageChange')[0]

  // const onValid = (data: any) => console.log(data, 'onValid')
  // const onInvalid = (data: any) => console.log(data, 'onInvalid')

  const [isResponseModalOpenImg, setIsResponseModalOpenImg] = useState<boolean>(false);
  const [isResponseModalOpenEdit, setIsResponseModalOpenEdit] = useState<boolean>(false);

  const isImage = (filetype: string) => {
    console.log(typeof(filetype))
    const form = /(.*?)\.(jpg|jpeg|gif|bmp|png)$/
    if(!filetype.match(form) && filetype !== ''){
      // window.alert('이미지 파일만 업로드 가능합니다!')
      setIsResponseModalOpenImg(true)
      resetField('imageChange')
    }
  }

  const password = useRef<any>()
  password.current = watch('password')

  const onSubmit = (data: any) => {
    console.log(data)
    
    const modifyInDTO: modifyInDTOType = {
      username: data.username,
      password: data.password,
      phone: data.phone
    }
    const setMyInfoData: setMyinfoData = {
      image: data.imageChange === '' ? null : data.imageChange[0],
      modifyInDTO
    }
    setIsResponseModalOpenEdit(true)
    mutate(setMyInfoData)
    resetField('password')
    resetField('passwordCheck')
  }
  
  return (
    <S.backgroundDiv>
      <S.titleSpan>My Info</S.titleSpan>
      <S.flexForm onSubmit={handleSubmit(onSubmit)}>
        <S.imgSectionDiv>
          <S.wrapperDiv>
            <img onError={handleImageError} src={src.current ? URL.createObjectURL(src.current) : imageUri} />
            <label htmlFor='imageChange'><FiEdit /></label>
          </S.wrapperDiv>
          {/* <label htmlFor='imageChange'>이미지 변경</label> */}
          <input type='file' 
            accept='image/*' 
            id='imageChange'
            {...register('imageChange', 
              {
                onChange: (e: any) => isImage(e.target.value),
              }
            )}/>
        </S.imgSectionDiv>
        <S.formDiv>
          <S.formListDiv>
            <label>직급</label>
            <span>{role === 'USER' ? '사원':'관리자'}</span>
          </S.formListDiv>
          <S.formListDiv>
            <label>이메일</label><span>{email}</span>
          </S.formListDiv>
          <S.formListDiv>
            <label>이름</label>
            <input {...register('username', {
              required: true,
              minLength: 2
            })} />
            {errors.username && errors.username.type === 'required'
              && <p>이름을 입력해주세요!</p>}
            {errors.username && errors.username.type === 'minLength'
              && <p>2자 이상 입력해주세요!</p>}
          </S.formListDiv>
          <S.formListDiv>
            <label>연락처</label>
            <input placeholder='010-****-****'{...register('phone', {
              required: 'true',
              pattern: /^010-\d{4}-\d{4}$/
            })} />
            {errors.phone && errors.phone.type === 'required'
              && <p>연락처를 입력해주세요!</p>}
            {errors.phone && errors.phone.type === 'pattern'
              && <p>010-****-**** 형식으로 입력해주세요!</p>}
          </S.formListDiv>
          <S.formListDiv>
            <label>비밀번호</label>
            <input type='password' placeholder='문자, 숫자, 기호를 모두 포함 8자 이상'
            {...register('password', {
              required: 'true',
              minLength: 8,
              pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*\W)(?!.*\s).{8,}$/
            })} />
            {errors.password && errors.password.type === 'required'
              && <p>비밀번호를 입력해주세요!</p>}
            {errors.password && errors.password.type === 'minLength'
              && <p>8자 이상 입력해주세요!</p>}
            {errors.password && errors.password.type === 'pattern'
              && <p>문자, 숫자, 기호를 모두 포함하여 입력해주세요!</p>}
          </S.formListDiv>
          <S.formListDiv>
            <label>비밀번호 확인</label>
            <input type='password' placeholder='문자, 숫자, 기호를 모두 포함 8자 이상'
            {...register('passwordCheck', {
              required: 'true',
              minLength: 8,
              pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*\W)(?!.*\s).{8,}$/,
              validate: (value) => value === password.current
            })} />
            {errors.passwordCheck && errors.passwordCheck.type === 'required'
              && <p>비밀번호를 한번 더 입력해주세요!</p>}
            {errors.passwordCheck && errors.passwordCheck.type === 'minLength'
              && <p>8자 이상 입력해주세요!</p>}
            {errors.passwordCheck && errors.passwordCheck.type === 'pattern'
              && <p>문자, 숫자, 기호를 모두 포함하여 입력해주세요!</p>}
            {errors.passwordCheck && errors.passwordCheck.type === 'validate'
              && <p>비밀번호가 일치하지 않습니다!</p>}
          </S.formListDiv>
        </S.formDiv>  
        <S.changeButton type='submit'>정보 수정</S.changeButton>
      </S.flexForm>
      {isResponseModalOpenImg && (
        <AlertModal onConfirmClick={() => setIsResponseModalOpenImg(false)} message={'이미지 파일만 업로드 가능합니다!'} />
      )}
      {isResponseModalOpenEdit && (
        <AlertModal onConfirmClick={() => setIsResponseModalOpenEdit(false)} message={'정보가 수정되었습니다!'} />
      )}
    </S.backgroundDiv>
  )
}

export default MyInfo