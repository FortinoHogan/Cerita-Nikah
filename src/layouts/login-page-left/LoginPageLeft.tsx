import React, { useState } from 'react'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'

const LoginPageLeft = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div>
      <img className='mx-5 w-20 h-20' src="assets/images/logo.png" alt="logo" />
      <div>
        <div className='mt-10 text-center'>
          <h1 className='text-gray text-2xl font-semibold'>Sign In with email</h1>
          <p className='text-light-gray font-semibold'>Make your wedding invitation easily</p>
        </div>
        <div className='flex flex-col w-full mt-10'>
          <div className='flex flex-col gap-5'>
            <Input type="text" placeholder="Email" value={email} image="assets/images/email.png" onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" placeholder="Password" value={password} image="assets/images/password.png" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='flex flex-col mt-10'>
            <Button text='Sign In' className='text-white' onClick={() => { }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPageLeft