import React from 'react'
import RegisterPageLeft from '../../layouts/register-page-left/RegisterPageLeft'
import RegisterPageRight from '../../layouts/register-page-right/RegisterPageRight'

const RegisterPage = () => {
  return (
    <div className='grid grid-cols-2 h-screen'>
        <RegisterPageLeft/>
        <RegisterPageRight/>
    </div>
  )
}

export default RegisterPage