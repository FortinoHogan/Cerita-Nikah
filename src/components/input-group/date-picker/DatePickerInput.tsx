import React from 'react';
import { IDatePickerInput } from './IDatePickerInput'

const DatePickerInput = (props: IDatePickerInput) => {
    const { label, placeholder, value, onChange } = props;
    return (
        <div className='flex flex-col gap-1'>
            <label className='text-custom-gray font-semibold'>{label}</label>
            <input type="date" placeholder={placeholder} value={value} onChange={onChange} className="w-full outline-none rounded-lg p-3 font-semibold text-custom-light-gray border-custom-pink border-[1px] cursor-pointer" />
        </div>
    );
};

export default DatePickerInput;
