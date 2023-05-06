import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { register } from '../../api/authService';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { AxiosError } from 'axios';
import { setCookie } from '../../utils/cookies';
function RegisterPage() {
  const navigate = useNavigate();
  const { mutate } = useMutation(register, {
    onSuccess: (data) => {
      if (data) {
        setCookie('accessToken', data.accessToken);
        navigate('/');
      }
    },
    onError: (err: AxiosError) => {
      console.error(err);
    },
  });
  return <RegisterForm mutate={mutate} />;
}

export default RegisterPage;
