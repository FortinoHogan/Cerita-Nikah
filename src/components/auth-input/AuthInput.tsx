import React from 'react'
import { IAuthInput } from './IAuthInput'

const AuthInput = (props: IAuthInput) => {
  const { type, placeholder, value, onChange, image } = props
  return (
    <div className='w-full flex items-center justify-center'>
      <div className='flex items-center bg-[#eee] px-3 py-4 gap-5 max-sm:w-[360px] w-[55%] rounded-xl'>
        <img src={image} alt="" className='w-5'/>
        <input className='bg-[#eee] outline-none w-full' type={type} placeholder={placeholder} value={value} onChange={onChange} />
      </div>
    </div>
  )
}

export default AuthInput