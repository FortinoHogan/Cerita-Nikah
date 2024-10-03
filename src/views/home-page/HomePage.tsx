import React, { useState } from 'react'
import HomePageSectionTop from '../../layouts/home-page-section-top/HomePageSectionTop';
import HomePageFeatures from '../../layouts/home-page-features/HomePageFeatures';
import Navbar from '../../layouts/navbar/Navbar';

const HomePage = () => {
  return (
    <div className='bg-custom-white'>
      <img src="assets/images/background.png" alt="background" className='w-full h-full opacity-[30%] object-cover object-right fixed'/>
      <Navbar />
      <HomePageSectionTop />
      <HomePageFeatures />
    </div>
  )
}

export default HomePage;
