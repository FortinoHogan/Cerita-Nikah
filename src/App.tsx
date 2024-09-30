import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './views/home-page/HomePage';
import LoginPage from './views/login-page/LoginPage';

function App() {
  return (
    <Routes>
      <Route path='*' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  );
}

export default App;
