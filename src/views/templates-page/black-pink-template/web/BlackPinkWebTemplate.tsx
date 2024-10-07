import React, { useState, useEffect } from "react";
import { useCountdown } from "../../../../libs/countdown";

const BlackPinkWebTemplate = () => {
  const timeLeft = useCountdown("2025-08-17T00:00:00");

  return (
    <div className="flex font-collingar text-white">
      <div className="w-8/12 flex bg-blue-50 h-screen fixed top-0 overflow-x-hidden left-0">
        <img
          className="z-10 h-full w-full object-cover object-top"
          src="/assets/images/black-pink-template/black-pink-web-image.jpg"
          alt=""
        />
        <div className="text-center text-5xl absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p>17.8.2025</p>
          <p className="mt-5 text-[#FFA5A5]">{`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}</p>
        </div>
        <div className="z-20 text-7xl text-center flex items-center justify-center absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <p className="text-[#FFA5A5] absolute bottom-14 right-0">Galih</p>
          <p className="absolute bottom-5 z-30">&</p>
          <p className="text-[#FFA5A5] absolute -bottom-4 left-0">Ratna</p>
        </div>
      </div>
      <div className="w-4/12 h-full fixed top-0 overflow-x-hidden right-0 bg-black">
        <div className="mt-5 ml-5 text-start h-4/6 flex items-start flex-col">
          <div className="w-[45%] bg-white h-4/6"></div>
          <div className="mt-5 relative">
            <p className="text-3xl text-[#FFA5A5]">Galih Kapal Lawd</p>
            <div className="left-4 text-lg absolute top-6">
              <p className="text-base mb-1 text-[#cecece]">First Son of</p>
              <p>Mr. Muliyono Siregar</p>
              <p>Mrs. Puan Siregar</p>
            </div>
          </div>
        </div>
        <div className="mr-5 text-end h-4/6 flex items-end flex-col">
          <div className="w-[45%] bg-white h-4/6"></div>
          <div className="mt-5 relative">
            <p className="text-3xl text-[#FFA5A5]">Ratna Mewing Streak</p>
            <div className="text-lg absolute top-6 right-4">
              <p className="text-base mb-1 text-[#cecece]">First Daughter of</p>
              <p>Mr. Budi Mewing</p>
              <p>Mrs. Siti Mewing</p>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <p className="text-3xl text-center text-[#FFA5A5]">Our Love Story</p>
        </div>
      </div>
    </div>
  );
};

export default BlackPinkWebTemplate;
