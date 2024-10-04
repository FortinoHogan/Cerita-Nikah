import React from 'react'
import { IProfileModal, IProfileRow } from './IProfileModal'
import { useNavigate } from 'react-router-dom'

const profileRow = (props: IProfileRow) => {
    const { image, text, onClick } = props
    return (
        <div className='flex items-center gap-5 cursor-pointer hover:bg-opacity-50 hover:bg-slate-400 px-4 py-3' onClick={onClick}>
            <img src={image} alt="menu" className='w-5' />
            <p className='text-custom-pink font-semibold'>{text}</p>
        </div>
    )
}
const ProfileModal = (props: IProfileModal) => {
    const { email } = props
    const nav = useNavigate()
    return (
        <div className='absolute top-20 right-0 w-max border-2 border-custom-pink bg-white shadow-lg rounded-lg z-50'>
            <div className='flex items-center gap-5 text-custom-pink font-semibold p-4'>
                <img src="assets/images/profile.jpg" alt="profile" className='w-[50px] h-[50px] rounded-full object-cover object-top' />
                <p>{email}</p>
            </div>
            <hr className="absolute left-0 h-[1px] w-full bg-custom-pink border-0 rounded-sm" />
            <div className='flex flex-col'>
                {profileRow({ image: 'assets/images/home.png', text: 'Home', onClick: () => nav('/') })}
                {profileRow({ image: 'assets/images/dashboard.png', text: 'Dashboard', onClick: () => nav('/dashboard') })}
                {profileRow({ image: 'assets/images/help-and-support.png', text: 'Help and Support', onClick: () => nav('/') })}
                {profileRow({ image: 'assets/images/send-feedback.png', text: 'Send Feedback', onClick: () => nav('/') })}
            </div>
            <hr className="absolute left-0 h-[1px] w-full bg-custom-pink border-0 rounded-sm" />
            <div className='flex flex-col'>
                {profileRow({ image: 'assets/images/logout.png', text: 'Logout', onClick: () => nav('/') })}
            </div>
        </div>
    )
}

export default ProfileModal