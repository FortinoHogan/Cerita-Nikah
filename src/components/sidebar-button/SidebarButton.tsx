import React from 'react'
import { ISidebarButton } from './ISidebarButton'

const SidebarButton = (props: ISidebarButton) => {
    const { text, onClick, image, isActive } = props
    return (
        <div className={`flex items-center gap-5 cursor-pointer p-5 mx-5 rounded-xl transition ease-in-out duration-100 ${isActive === text ? 'bg-custom-pink' : 'hover:bg-pink-400'}`} onClick={onClick}>
            <img src={image} alt="text" className='w-7'/>
            <p className='text-white font-semibold text-lg'>{text}</p>
        </div>
    )
}

export default SidebarButton