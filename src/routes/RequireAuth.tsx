import { Outlet, useNavigate } from 'react-router-dom';
import { Role } from '../interface/User';
import { getMyInfo } from '../api/my';
import { useEffect, useState } from 'react';

interface RequiredRoleProps {
  requiredRole: Role[];
}

const RequireAuth = ({ requiredRole }: RequiredRoleProps) => {
  const [authState, setAuthState] = useState(false);
  const navigate = useNavigate();

  const checkAuth = async () => {
    try {
      const { role } = await getMyInfo();
      if (!requiredRole.includes(role)) { //여기서 rquriedRole 검사
        setAuthState(false)
        navigate('/main', { replace: true });
      } else {
        setAuthState(true)
      }
    } catch (error) {
      navigate('/');
    }
  };

  useEffect(() => {
    checkAuth();
  },);

  return authState ? <Outlet /> : null;
};

export default RequireAuth;
