import React from 'react'
import { IFloatingDeviceButton } from './IFloatingDeviceButton'

const FloatingDeviceButton = (props: IFloatingDeviceButton) => {
    const { onClick, image, isActive, imageActive, type, className } = props
    return (
        <div className='cursor-pointer'>
            <img src={isActive ==  type ? imageActive : image} alt="device" className={className + ` w-7`} onClick={onClick}/>
        </div>
    )
}

export default FloatingDeviceButton