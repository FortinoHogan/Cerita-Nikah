import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './views/home-page/HomePage';
import LoginPage from './views/login-page/LoginPage';
import RegisterPage from './views/register-page/RegisterPage';

function App() {
  return (
    <Routes>
      <Route path='*' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
