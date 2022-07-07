import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { Auth, Home, Register } from './components';
import { croAxios } from './components/axios';

export const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // if (localStorage.getItem('token')) {
    //   navigate('/');
    // } else {
    //   navigate('/auth/login');
    // }
    croAxios()
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/auth/:path" element={<Auth />} />
        <Route path="/auth/register/:path" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
