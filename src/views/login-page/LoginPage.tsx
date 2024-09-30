import React from 'react'
import LoginPageLeft from '../../layouts/login-page-left/LoginPageLeft'
import LoginPageRight from '../../layouts/login-page-right/LoginPageRight'

const LoginPage = () => {
  return (
    <div className='grid grid-cols-2 h-screen'>
        <LoginPageLeft />
        <LoginPageRight />
    </div>
  )
}

export default LoginPage