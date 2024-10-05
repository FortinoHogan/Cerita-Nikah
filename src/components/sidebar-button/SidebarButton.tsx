import React from 'react'
import { ISidebarButton } from './ISidebarButton'

const SidebarButton = (props: ISidebarButton) => {
    const { text, onClick, image, isActive } = props
    return (
        <div className={`flex items-center gap-5 cursor-pointer p-5 max-lg:p-3 mx-5 rounded-xl transition ease-in-out duration-75 ${isActive === text ? 'bg-custom-pink' : 'hover:bg-custom-pink hover:bg-opacity-40'}`} onClick={onClick}>
            <img src={image} alt="text" className='w-7 max-lg:w-5'/>
            <p className='text-white font-semibold text-lg max-lg:text-base'>{text}</p>
        </div>
    )
}

export default SidebarButton