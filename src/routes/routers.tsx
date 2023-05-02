import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/common/Layout';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import AdminApprovalPage from '../pages/AdminApprovalPage';
import AdminAuthPage from '../pages/AdminAuthPage';
import Mypage from '../pages/MyPage';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/mypage" element={<Mypage/>} />
        <Route path="/adminApproval" element={<AdminApprovalPage/>} />
        <Route path="/adminAuth" element={<AdminAuthPage/>} />
      </Route>
    </Routes>
  );
}

export default Routers;
