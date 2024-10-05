import React from 'react'
import { IInput } from './IInput'

const Input = (props: IInput) => {
    const { label, placeholder, value, onChange } = props
  return (
    <div className='flex flex-col gap-1'>
        <label className='text-custom-gray font-semibold'>{label}</label>
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className='w-full bg-[#eee] outline-none rounded-xl p-3 font-semibold text-custom-gray border-custom-pink border-[1px]'
        />
    </div>
  )
}

export default Input