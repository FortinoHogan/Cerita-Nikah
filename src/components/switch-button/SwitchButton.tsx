import React from 'react'
import ISwitchButton from './ISwitchButton'

const SwtichButton = (props: ISwitchButton) => {
    const { selected, setSelected, option1, option2 } = props
    return (
        <div className='relative w-full flex items-center justify-center border-2 rounded-lg border-custom-pink cursor-pointer py-[4px] font-semibold mb-3'>
            <div
                className={`absolute left-0 top-0 rounded-[0.25rem] h-full w-[50%] bg-custom-pink transition-all duration-300 ${selected === option2 ? 'translate-x-full rounded-tl-none rounded-bl-none' : 'translate-x-0 rounded-tr-none rounded-br-none'}`}
            ></div>
            <div
                className={`w-[50%] text-center z-10 transition-colors duration-300 ${selected === option1 ? 'text-white' : 'text-custom-pink'
                    }`}
                onClick={() => setSelected(option1)}
            >
                {option1}
            </div>
            <div
                className={`w-[50%] text-center z-10 transition-colors duration-300 ${selected === option2 ? 'text-white' : 'text-custom-pink'
                    }`}
                onClick={() => setSelected(option2)}
            >
                {option2}
            </div>
        </div>
    )
}

export default SwtichButton