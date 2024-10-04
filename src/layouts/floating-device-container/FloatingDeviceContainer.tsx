import React, { useState } from 'react'
import FloatingDeviceButton from '../../components/floating-device-button/FloatingDeviceButton'
import { useDeviceContext } from '../../context/device-context/DeviceContext'

const FloatingDeviceContainer = () => {
    const [isActive, setIsActive] = useState('phone')
    const { deviceState, setDeviceState } = useDeviceContext();
    return (
        <div className='pt-4 pb-6 px-6 rounded-3xl border-custom-pink border-2 absolute top-0 right-0 flex flex-col gap-6 '>
            <p className='text-custom-pink font-semibold text-lg'>Change Appearance</p>
            <div className='flex items-center justify-center gap-14'>
                <FloatingDeviceButton image="assets/images/phone-view.png" imageActive='assets/images/phone-view-active.png' onClick={() => { setIsActive('phone'); setDeviceState('phone') }} isActive={isActive} type='phone' className='w-7'/>
                <FloatingDeviceButton image="assets/images/desktop-view.png" imageActive='assets/images/desktop-view-active.png' onClick={() => { setIsActive('desktop'); setDeviceState('desktop') }} isActive={isActive} className='w-11' type='desktop' />
            </div>
        </div>
    )
}

export default FloatingDeviceContainer