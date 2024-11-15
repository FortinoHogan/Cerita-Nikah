import React, { useEffect, useState } from 'react'
import HomePageSectionTop from '../../layouts/home-page-section-top/HomePageSectionTop';
import HomePageFeatures from '../../layouts/home-page-features/HomePageFeatures';
import Navbar from '../../layouts/navbar/Navbar';
import HomePageTemplates from '../../layouts/home-page-templates/HomePageTemplates';
import HomePagePackage from '../../layouts/home-page-package/HomePagePackage';
import Footer from '../../layouts/footer/Footer';
import sr from '../..//libs/scrollReveal';

const HomePage = () => {
  useEffect(() => {
    const config = {
      origin: "bottom",
      duration: 1000,
      delay: 150,
      distance: "100px",
      easing: "ease",
    };
    sr.reveal('.contentFeature', config);
    sr.reveal('.contentTemplate', { ...config, delay: 200 });
    sr.reveal('.contentPackage', { ...config, delay: 250 });
  }, []);

  return (
    <div className='bg-custom-white'>
      <img src="assets/images/background.png" alt="background" className='w-full h-full opacity-[30%] object-cover object-right fixed' />
      <Navbar />
      <div className='flex flex-col gap-20'>
        <HomePageSectionTop />
        <HomePageFeatures />
        <HomePageTemplates />
        <HomePagePackage />
      </div>
      <Footer />
    </div>
  )
}

export default HomePage;
