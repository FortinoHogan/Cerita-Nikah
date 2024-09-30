import React from 'react'
import LoginPageLeft from '../../layouts/login-page-left/LoginPageLeft'
import LoginPageRight from '../../layouts/login-page-right/LoginPageRight'
import { useAuth } from '../../context/auth-context/AuthContext'
import { Navigate } from 'react-router-dom'

const LoginPage = () => {
  const authContext = useAuth()
  return (
    <div className='grid max-lg:grid-cols-1 grid-cols-2 h-screen'>
      {authContext?.isLogin && (<Navigate to={'/'} />)}
      <LoginPageLeft />
      <div className='max-lg:hidden'>
      <LoginPageRight />
      </div>
    </div>
  )
}

export default LoginPage