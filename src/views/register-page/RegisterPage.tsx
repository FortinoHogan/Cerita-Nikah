import React from 'react'
import RegisterPageLeft from '../../layouts/register-page-left/RegisterPageLeft'
import RegisterPageRight from '../../layouts/register-page-right/RegisterPageRight'
import { useAuth } from '../../context/auth-context/AuthContext'
import { Navigate } from 'react-router-dom'

const RegisterPage = () => {
    const authContext = useAuth()
    return (
        <div className='grid max-lg:grid-cols-1 grid-cols-2 h-screen'>
            {authContext?.isLogin && (<Navigate to={'/'} />)}
            <RegisterPageLeft />
            <div className='max-lg:hidden'>
                <RegisterPageRight />
            </div>
        </div>
    )
}

export default RegisterPage