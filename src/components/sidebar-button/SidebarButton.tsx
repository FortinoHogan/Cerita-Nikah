import React from 'react'
import { ISidebarButton } from './ISidebarButton'

const SidebarButton = (props: ISidebarButton) => {
    const { text, onClick, image, isActive } = props
    return (
        <div className={isActive == text ? `flex items-center gap-5 cursor-pointer p-5 rounded-xl bg-custom-pink mx-5` : `flex items-center gap-5 cursor-pointer p-5 mx-5`} onClick={onClick}>
            <img src={image} alt="text" className='w-7'/>
            <p className='text-white font-semibold text-lg'>{text}</p>
        </div>
    )
}

export default SidebarButton