import React from 'react'
import Sidebar from '../../layouts/sidebar/Sidebar'
import Navbar from '../../layouts/navbar/Navbar'

const CreateInvitationPage = () => {
    return (
        <div className='h-screen flex flex-col gap-10'>
            <div className='h-[9%]'>
                <Navbar />
            </div>
            <div className='h-[91%] px-10 pb-10'>
                <Sidebar />
            </div>
        </div>
    )
}

export default CreateInvitationPage