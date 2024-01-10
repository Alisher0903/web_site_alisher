import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Aos from 'aos';
import Home from '../pages/home';
import '../main.css';

const App = () => {

  // aos kutubxonasini ishlatish uchun
  Aos.init();

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App