import React from 'react'
import MobileView from '../../components/mobile-view/MobileView'
import { useDeviceContext } from '../../context/device-context/DeviceContext'
import DesktopView from '../../components/desktop-view/DesktopView'

const DeviceMockup = () => {
    const { deviceState } = useDeviceContext()
    return (
        <div>
            {deviceState === 'phone' && <MobileView />}
            {deviceState === 'desktop' && <DesktopView />}
        </div>
    )
}

export default DeviceMockup