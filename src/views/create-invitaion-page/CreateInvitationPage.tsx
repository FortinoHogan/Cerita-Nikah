import React, { useState } from 'react'
import Sidebar from '../../layouts/sidebar/Sidebar'
import Navbar from '../../layouts/navbar/Navbar'
import FloatingDeviceContainer from '../../layouts/floating-device-container/FloatingDeviceContainer'
import EditTemplateForm from '../../layouts/edit-template-form/EditTemplateForm'
import DeviceMockup from '../../layouts/device-mockup/DeviceMockup'
import { DeviceProvider } from '../../context/device-context/DeviceContext'

const CreateInvitationPage = () => {
    return (
        <div className='h-screen flex flex-col gap-10'>
            <div className='h-[9%]'>
                <Navbar />
            </div>
            <div className='h-[91%] px-10 pb-10 w-full flex justify-center'>
                <div className='w-[50%] flex justify-center gap-5'>
                    <div className='w-[50%]'>
                        <Sidebar />
                    </div>
                    <div className='w-[50%]'>
                        <EditTemplateForm />
                    </div>
                </div>
                <div className='w-[50%] relative h-full flex items-center justify-center'>
                    <DeviceProvider>
                        <FloatingDeviceContainer />
                        <DeviceMockup />
                    </DeviceProvider>
                </div>
            </div>
        </div>
    )
}

export default CreateInvitationPage