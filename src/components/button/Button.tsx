import React from 'react'
import { IButton } from './IButton'

const Button = (props: IButton) => {
    const { children, onClick, className } = props
    const roundedClassName = className.includes('rounded') ? className : `${className} rounded-xl`
    const widthClassName = className.includes('w-') ? className : `${className} w-[55%]`

    return (
        <div
            onClick={onClick}
            className={`${roundedClassName} ${widthClassName} hover:bg-pink-700 transition ease cursor-pointer max-sm:w-[360px] text-lg font-semibold p-3 bg-custom-pink text-center flex items-center justify-center`}
        >
            {children}
        </div>
    )
}

export default Button
