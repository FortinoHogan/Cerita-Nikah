import React from 'react'
import { IInput } from './IInput'

const Input = (props: IInput) => {
  const { type, placeholder, value, onChange, image } = props
  return (
    <div className='w-full flex items-center justify-center'>
      <div className='flex items-center bg-[#eee] px-3 py-4 gap-5 w-[55%] rounded-xl'>
        <img src={image} alt="" />
        <input className='bg-[#eee] outline-none w-full' type={type} placeholder={placeholder} value={value} onChange={onChange} />
      </div>
    </div>
  )
}

export default Input