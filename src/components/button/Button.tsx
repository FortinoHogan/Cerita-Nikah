import React from 'react'
import { IButton } from './IButton'

const Button = (props: IButton) => {
    const { text, onClick, className } = props
    return (
        <div onClick={onClick} className={className + ' cursor-pointer max-sm:w-[360px] w-[55%] text-xl font-semibold p-3 bg-custom-pink text-center rounded-xl'}>
            {text}
        </div>
    )
}

export default Button