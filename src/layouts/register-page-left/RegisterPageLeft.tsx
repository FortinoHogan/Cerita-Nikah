import React, { useState } from 'react'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import ButtonGoogle from '../../components/button-google/ButtonGoogle'
import { useNavigate } from 'react-router-dom'
import Anchor from '../../components/anchor/Anchor'

const RegisterPageLeft = () => {
    const [email, setEmail] = useState('')
    const [phoneNum, setPhoneNum] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const nav = useNavigate()
    return (
        <div className='h-full flex flex-col justify-center relative'>
            <img className='top-5 left-8 w-20 h-20 absolute cursor-pointer' onClick={() => nav('/')} src="assets/images/logo.png" alt="logo" />
            <div className='h-full flex flex-col justify-center'>
                <div className='text-center'>
                    <h1 className='text-custom-gray text-2xl font-semibold'>Sign Up to <span className='text-custom-pink'>Cerita Nikah</span></h1>
                    <p className='text-custom-light-gray font-semibold'>You can customize the invitation to your liking</p>
                </div>
                <div className='flex flex-col w-full mt-10'>
                    <div className='flex flex-col gap-5'>
                        <Input type="text" placeholder="Email" value={email} image="assets/images/email.png" onChange={(e) => setEmail(e.target.value)} />
                        <Input type="text" placeholder="WhatsApp Phone Number" value={phoneNum} image="assets/images/whatsapp.png" onChange={(e) => setPhoneNum(e.target.value)} />
                        <Input type="password" placeholder="Password" value={password} image="assets/images/password.png" onChange={(e) => setPassword(e.target.value)} />
                        <Input type="password" placeholder="Confirm Password" value={confirmPassword} image="assets/images/password.png" onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <div className='flex flex-col items-center mt-10'>
                        <Button text='Sign Up' className='text-custom-white text-xl' onClick={() => { }} />
                    </div>
                    <div className="flex w-full items-center justify-center my-8">
                        <div className='flex items-center w-[55%]'>
                            <hr className="h-1 w-full mt-3 bg-[#BCBEC0] border-0 rounded-sm" />
                            <span className="mx-4 text-gray-500">or</span>
                            <hr className="h-1 w-full mt-3 bg-[#BCBEC0] border-0  rounded-sm" />
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <ButtonGoogle text='Up' />
                    </div>
                </div>
                <div className='flex items-center justify-center gap-1 mt-5'>
                    <p className='text-center text-custom-gray font-semibold'>Already have an account?</p>
                    <Anchor text="Sign In" href="/login" className="text-custom-pink font-semibold text-base" />
                </div>
            </div>
        </div>
    )
}

export default RegisterPageLeft