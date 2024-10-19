import React, { useState } from 'react'
import Sidebar from '../../layouts/sidebar/Sidebar'
import Navbar from '../../layouts/navbar/Navbar'
import FloatingDeviceContainer from '../../layouts/floating-device-container/FloatingDeviceContainer'
import EditTemplateForm from '../../layouts/edit-template-form/EditTemplateForm'
import DeviceMockup from '../../layouts/device-mockup/DeviceMockup'
import { DeviceProvider } from '../../context/device-context/DeviceContext'
import { FormProvider } from '../../context/form-context/FormContext'
import { ContentProvider } from '../../context/content-context/ContentContext'
import { useAuth } from '../../context/auth-context/AuthContext'
import { Navigate } from 'react-router-dom'
import { GalleryProvider } from '../../context/gallery-context/GalleryContext'
import { useSelector } from 'react-redux'
import { RootState } from '../../services/redux/Store'
import { addTemplatePersonalized } from '../../services/template-personalized/TemplateService'
import Button from '../../components/button/Button'
import { IMessage } from '../../interfaces/message.interfaces'

const CreateInvitationPage = () => {
    const authContext = useAuth()
    const templatePersonalized = useSelector((state: RootState) => state.template);
    const [message, setMessage] = useState<IMessage>();

    const handleSave = async () => {
        const createTemplate = await addTemplatePersonalized(templatePersonalized);
        setMessage(createTemplate);
        console.log(message);
    }
    
    return (
        <div className='h-screen flex flex-col gap-10 max-lg:gap-7'>
            {!authContext?.isLogin && (<Navigate to={'/'} />)}
            <div className='h-[9%]'>
                <Navbar />
            </div>
            <img src="assets/images/background.png" alt="background" className='w-full h-full absolute opacity-[30%] object-cover object-right' />
            <div className='h-[91%] px-10 max-lg:px-5 pb-10 w-full flex justify-center relative overflow-hidden'>
                <div className='w-[50%] flex justify-center gap-5 z-40'>
                    <FormProvider>
                        <div className='w-[50%]'>
                            <Sidebar />
                        </div>
                        <div className='w-[50%]'>
                            <ContentProvider>
                                <GalleryProvider>
                                    <EditTemplateForm />
                                </GalleryProvider>
                            </ContentProvider>
                        </div>
                    </FormProvider>
                </div>
                <div className='w-[50%] relative h-full flex items-center justify-center'>
                    <DeviceProvider>
                        <FloatingDeviceContainer />
                        <Button onClick={handleSave} className='w-[15.5rem] max-2xl:w-[13rem] max-xl:w-[11rem] p-3 max-2xl:pb-4 max-2xl:pt-2 max-2xl:px-4 rounded-xl absolute top-40 right-0 flex flex-col gap-6 text-custom-white items-center justify-center' children='Save Changes' />
                        <DeviceMockup />
                    </DeviceProvider>
                </div>
            </div>
        </div>
    )
}

export default CreateInvitationPage