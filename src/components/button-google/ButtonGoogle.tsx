import React, { useState } from 'react'
import { IButtonGoogle } from './IButtonGoogle'
import { doSignInWithGoogle } from '../../services/user/UserService';
import { useAuth } from '../../context/auth-context/AuthContext';


const ButtonGoogle = (props: IButtonGoogle) => {
    const { text } = props
    const [isSigningIn, setIsSigningIn] = useState(false);

    const onGoogleSignIn = (e: any) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            doSignInWithGoogle().catch((err) => {
                setIsSigningIn(false);
            });
        }
    };
    return (
        <button onClick={(e) => {
            onGoogleSignIn(e);
        }} disabled={isSigningIn} className='flex items-center gap-3 justify-center border-2 border-[#5d5d5d] text-custom-light-gray cursor-pointer max-sm:w-[360px] w-[55%] text-xl font-semibold p-3 text-center rounded-xl'>
            <img className='w-7' src="assets/images/google.png" alt="google" />
            Sign {text} with Google
        </button>
    )
}

export default ButtonGoogle