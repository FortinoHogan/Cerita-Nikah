import React from "react";
import "./LoadingPage.css";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex bg-[#FFFCFA] justify-center items-center">
      <img
        src="assets/images/background.png"
        alt="background"
        className="w-full h-full opacity-[30%] object-cover object-right fixed"
      />
      <div className="flex justify-center items-center">
        <img src="/assets/images/pacman.svg" alt="" />
      </div>
    </div>
  );
};

export default LoadingPage;
