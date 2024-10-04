import React from 'react'
import { IFloatingDeviceButton } from './IFloatingDeviceButton'

const FloatingDeviceButton = (props: IFloatingDeviceButton) => {
    const { onClick, image, isActive, imageActive, type, className } = props
    return (
        <div className='cursor-pointer'>
            <img src={isActive ==  type ? imageActive : image} alt="device" className={className} onClick={onClick}/>
        </div>
    )
}

export default FloatingDeviceButton