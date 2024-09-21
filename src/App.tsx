import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './views/home-page/HomePage';

function App() {
  return (
    <Routes>
      <Route path='*' element={<HomePage />} />
    </Routes>
  );
}

export default App;
