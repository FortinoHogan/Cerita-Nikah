import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Anchor from '../../components/anchor/Anchor'
import Button from '../../components/button/Button'

const NavbarHomePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const nav = useNavigate()

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => document.body.classList.remove('overflow-hidden');
    }, [isOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024 && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen]);

    return (
        <div>
            <div className="grid grid-cols-15 items-center py-3 bg-[#F093B5]">
                <div className="col-start-2 flex items-center gap-10 z-50">
                    <img
                        onClick={() => nav('/')}
                        className="cursor-pointer w-[80px]"
                        src="assets/images/logo.png"
                        alt="logo"
                    />
                    <div className="hidden lg:flex gap-10">
                        <Anchor text="Preset/Desain" href="/" />
                        <Anchor text="Portofolio" href="/" className="ml-5" />
                    </div>
                </div>
                <div className="col-end-14 max-lg:col-end-15 flex items-center gap-10">
                    <div className="hidden lg:flex lg:items-center gap-10">
                        <Anchor text="Daftar" href="/register" />
                        <Button
                            text="Masuk"
                            className="text-[#26282B] w-fit text-lg px-4"
                            onClick={() => nav('/login')}
                        />
                    </div>
                    <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
                        <svg
                            className="w-8 h-8"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div
                className={`lg:hidden fixed top-15 right-0 h-full w-[50%] max-sm:w-[300px] bg-custom-pink flex flex-col items-center z-50 gap-5 py-5 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <Anchor text="Preset/Desain" href="/" className='text-[#26282B]'/>
                <Anchor text="Portofolio" href="/" className='text-[#26282B]'/>
                <Anchor text="Daftar" href="/register" className='text-[#26282B]'/>
                <Anchor text="Masuk" href="/login" className='text-[#26282B]'/>
            </div>
            {isOpen &&(
                <div
                    className={`absolute top-15 left-0 w-full h-screen bg-black opacity-50 z-10`}
                    onClick={toggleMenu}
                ></div>
            )}
        </div>
    )
}

export default NavbarHomePage