import React from 'react'
import { IButton } from './IButton'

const Button = (props: IButton) => {
    const { text, onClick, className } = props
    return (
        <div onClick={onClick} className={className + ' hover:bg-pink-700 transition ease cursor-pointer max-sm:w-[360px] w-[55%] text-lg font-semibold p-3 bg-custom-pink text-center rounded-xl'}>
            {text}
        </div>
    )
}

export default Button