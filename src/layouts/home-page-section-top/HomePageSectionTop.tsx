import React from 'react'
import Button from '../../components/button/Button'
import { useNavigate } from 'react-router-dom'

const HomePageSectionTop = () => {
    const nav = useNavigate()
    return (
        <div className='relative min-h-screen flex items-center justify-center'>
            <div className='flex items-center justify-center w-full'>
                <div className='w-[50%] max-sm:w-[100%] z-40 flex flex-col gap-10 px-56 max-2xl:px-12 max-xl:px-8 '>
                    <div className='font-semibold text-custom-pink flex flex-col gap-4'>
                        <p className='text-3xl'>Welcome to</p>
                        <h1 className='text-4xl'>Cerita Nikah</h1>
                    </div>
                    <p className='text-[#F093B5] font-semibold text-lg'>Easily create elegant, personalized wedding invitations with our self-service platform. Choose your design, add your story, and share instantly. Fast, free, and fully customized!</p>
                    <Button onClick={() => nav('/dashboard')} text="Create Now!" className="text-custom-white w-[165px] max-sm:w-[150px]" />
                </div>
                <div className='w-[50%] z-40 flex items-center justify-center max-sm:hidden'>
                    <img src="assets/images/homepage-right-image.png" alt="homepage" className='w-[35rem] max-2xl:w-[30rem] max-xl:w-[20rem]' />
                </div>
            </div>
        </div>
    )
}

export default HomePageSectionTop