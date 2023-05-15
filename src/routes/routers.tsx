
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/common/Layout';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import AdminApprovalPage from '../pages/AdminApprovalPage/AdminApprovalPage';
import AdminAuthPage from '../pages/AdminAuthPage';
import Mypage from '../pages/MyPage/MyPage';
import MainPage from '../pages/MainPage/MainPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import AdminAccApprovalPage from '../pages/AdminAccApprovalPage';
import RequireAuth from './RequireAuth';
import { Role } from '../interface/User';

// authContext 만들어서 -> useAuth로 훅 만들고 -> login에서 응답데이터로 role저장하고 -> RequireAuth로 Role props로 받아서 걸러줌

function Routers() {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<Layout />}>
        <Route element={<RequireAuth requiredRole={[Role.USER, Role.ADMIN]} />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/mypage" element={<Mypage />} />
        </Route>
        <Route element={<RequireAuth requiredRole={[Role.ADMIN]} />}>
          <Route path="/adminApproval" element={<AdminApprovalPage />} />
          <Route path="/adminAuth" element={<AdminAuthPage />} />
          <Route path="/accApproval" element={<AdminAccApprovalPage />} />
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default Routers;
