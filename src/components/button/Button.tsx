import React from 'react'
import { IButton } from './IButton'

const Button = (props: IButton) => {
    const { children, onClick, className } = props
    const roundedClassName = className.includes('rounded') ? className : `${className} rounded-xl`

    return (
        <div
            onClick={onClick}
            className={`${roundedClassName} hover:bg-pink-700 transition ease cursor-pointer max-sm:w-[360px] w-[55%] text-lg font-semibold p-3 bg-custom-pink text-center`}
        >
            {children}
        </div>
    )
}

export default Button
