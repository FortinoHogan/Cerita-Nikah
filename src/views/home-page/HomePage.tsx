import React, { useState } from 'react'
import HomePageSectionTop from '../../layouts/home-page-section-top/HomePageSectionTop';
import HomePageFeatures from '../../layouts/home-page-features/HomePageFeatures';
import Navbar from '../../layouts/navbar/Navbar';
import HomePageTemplates from '../../layouts/home-page-templates/HomePageTemplates';
import HomePagePackage from '../../layouts/home-page-package/HomePagePackage';
import Footer from '../../layouts/footer/Footer';
import Loading from '../../components/loading/Loading';

const HomePage = () => {
  return (
    <div className='bg-custom-white'>
      <img src="assets/images/background.png" alt="background" className='w-full h-full opacity-[30%] object-cover object-right fixed' />
      <Navbar />
      <HomePageSectionTop />
      <HomePageFeatures />
      <HomePageTemplates />
      <HomePagePackage />
      <Footer />
    </div>
  )
}

export default HomePage;
