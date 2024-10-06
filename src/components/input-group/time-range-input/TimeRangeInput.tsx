import React from 'react'
import { ITimeRangeInput } from './ITimerRangeInput'

const TimeRangeInput = (props: ITimeRangeInput) => {
    const { label1, placeholder1, label2, placeholder2, value1, value2, onChange1, onChange2 } = props
    return (
        <div className='flex gap-3 items-center justify-center w-full max-2xl:gap-0 max-xl:flex-col'>
            <div className='flex flex-col gap-1 w-full'>
                <label className='text-custom-gray font-semibold'>{label1}</label>
                <input
                    type="time"
                    placeholder={placeholder1}
                    value={value1}
                    onChange={onChange1}
                    className='outline-none rounded-lg p-3 font-semibold text-custom-gray border-custom-pink border-[1px] cursor-pointer'
                />
            </div>
            <p className='text-custom-gray font-semibold mt-7 max-xl:mt-0 max-xl:py-5'>Until</p>
            <div className='flex flex-col gap-1 w-full'>
                <label className='text-custom-gray font-semibold'>{label2}</label>
                <input
                    type="time"
                    placeholder={placeholder2}
                    value={value2}
                    onChange={onChange2}
                    className='outline-none rounded-lg p-3 font-semibold text-custom-gray border-custom-pink border-[1px] cursor-pointer'
                />
            </div>
        </div>
    )
}

export default TimeRangeInput