import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/common/Layout';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import AdminApprovalPage from '../pages/AdminApprovalPage/AdminApprovalPage';
import AdminAuthPage from '../pages/AdminAuthPage/AdminAuthPage';
import Mypage from '../pages/MyPage/MyPage';
import MainPage from '../pages/MainPage/MainPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

function Routers() {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<Layout />}>
        <Route path="/main" element={<MainPage/>}/>
        <Route path="/mypage" element={<Mypage/>} />
        <Route path="/adminApproval" element={<AdminApprovalPage/>} />
        <Route path="/adminAuth" element={<AdminAuthPage/>} />
      </Route>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  );
}

export default Routers;
