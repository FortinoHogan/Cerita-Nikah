import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfileModal from '../../components/profile-modal/ProfileModal';
import { useAuth } from '../../context/auth-context/AuthContext';
import Button from '../../components/button/Button';

const Navbar = () => {
    const [showProfileModal, setShowProfileModal] = useState(false);

    const nav = useNavigate();
    const authContext = useAuth();
    const user = authContext?.currentUser;

    return (
        <div className="flex justify-between px-20 max-md:px-10 items-center bg-[#F093B5] h-[85px] shadow-[0px_4.0px_4.0px_rgba(0,0,0,0.38)] fixed w-full z-50">
            <div className="flex items-center gap-10 z-50">
                <img
                    onClick={() => nav('/')}
                    className="cursor-pointer w-[80px] max-lg:w-[50px]"
                    src="assets/images/logo-white.png"
                    alt="logo"
                />
            </div>
            <div className='w-[700px] max-xl:w-[600px] max-lg:w-[500px] max-md:hidden'>
                <img src="assets/images/slogan.png" alt="" className='' />
            </div>
            <div className="col-end-14 max-lg:col-end-15 flex items-center gap-10">
                {user ? <>
                    <img src="assets/images/share.png" alt="share" className='cursor-pointer w-[30px] max-lg:w-[25px]' />
                    <div
                        className='relative'
                        onClick={() => { setShowProfileModal(!showProfileModal) }}
                    >
                        <img src={user?.photoURL || 'assets/images/profile.jpg'} alt="profile" className='w-[50px] h-[50px] rounded-full object-cover object-top cursor-pointer max-lg:w-[35px] max-lg:h-[35px]' />
                        {showProfileModal &&
                            <ProfileModal />
                        }
                    </div>
                </> : <Button onClick={() => nav('/login')} text="Sign In" className="text-custom-white w-fit px-5 py-2" />}
            </div>
            {showProfileModal && <div className='w-screen h-screen z-40 fixed top-0 left-0' onClick={() => setShowProfileModal(false)}></div>}
        </div>
    )
}

export default Navbar