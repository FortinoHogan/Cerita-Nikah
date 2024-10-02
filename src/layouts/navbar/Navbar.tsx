import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const nav = useNavigate();
    return (
        <div className="flex justify-between px-20 items-center py-3 bg-[#F093B5] h-full">
            <div className="flex items-center gap-10 z-50">
                <img
                    onClick={() => nav('/')}
                    className="cursor-pointer w-[80px]"
                    src="assets/images/logo-white.png"
                    alt="logo"
                />
            </div>
            <div className='w-[750px]'>
                <img src="assets/images/slogan.png" alt="" className='' />
            </div>
            <div className="col-end-14 max-lg:col-end-15 flex items-center gap-10">
                <img src="assets/images/share.png" alt="share" className='cursor-pointer' />
                <img src="assets/images/profile.jpg" alt="profile" className='w-[50px] h-[50px] rounded-full object-cover object-top cursor-pointer' />
            </div>
        </div>
    )
}

export default Navbar