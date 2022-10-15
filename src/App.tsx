import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { Auth, Home, Register } from './components';

export const App = () => {
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
