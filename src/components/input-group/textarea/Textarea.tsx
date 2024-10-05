import React from 'react'
import { ITextarea } from './ITextarea'

const Textarea = (props: ITextarea) => {
    const { label, placeholder, value, onChange } = props
    return (
        <div className='flex flex-col gap-1'>
            <label className='text-custom-gray font-semibold'>{label}</label>
            <textarea
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className='w-full h-[10rem]  outline-none rounded-xl p-3 font-semibold text-custom-gray border-custom-pink border-[1px] resize-none scrollbar-hidden'
            />
        </div>
    )
}

export default Textarea