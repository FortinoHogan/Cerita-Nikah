import React from 'react'
import { IButtonGoogle } from './IButtonGoogle'

const ButtonGoogle = (props: IButtonGoogle) => {
    const { onClick, text } = props
    return (
        <div onClick={onClick} className='flex items-center gap-3 justify-center border-2 border-[#5d5d5d] text-custom-light-gray cursor-pointer w-[55%] text-xl font-semibold p-3 text-center rounded-xl'>
            <img className='w-7' src="assets/images/google.png" alt="google" />
            Sign {text} with Google
        </div>
    )
}

export default ButtonGoogle