import React from 'react'
import { IDropdownList } from './IDropdownList'

const DropdownList = (props: IDropdownList) => {
    const { options, value, onChange, label } = props
    return (
        <div className='flex flex-col gap-1'>
            <label className='text-custom-gray font-semibold'>{label}</label>
            <select value={value} onChange={onChange} className="w-full outline-none rounded-lg p-3 font-semibold text-custom-gray border-custom-pink border-[1px]">
                {options.map((option, index) => (
                    <option key={index} value={option.name} className='text-custom-white font-semibold bg-[#f093b5]'>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default DropdownList