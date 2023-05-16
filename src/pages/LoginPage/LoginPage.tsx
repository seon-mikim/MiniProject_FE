import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { login } from '../../api/authService';
import LoginForm from '../../components/LoginForm/LoginForm';
import { AxiosError } from 'axios';
function LoginPage() {
  const navigate = useNavigate();
  const { mutate } = useMutation(login, {
    onSuccess: (res) => {
      console.log(res);
      if (res && res.data.role === 'USER') {
        navigate('/main');
      } else if (res && res.data.role === 'ADMIN') {
        navigate('/adminApproval');
      }
    },
    onError: (err: AxiosError) => {
      console.error(err);
    },
  });

  return <LoginForm mutate={mutate} />;
}

export default LoginPage;
