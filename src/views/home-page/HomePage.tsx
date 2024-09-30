import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar';
import { doSignInWithGoogle } from '../../services/user/UserService';

const HomePage = () => {
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
    <div className='grid grid-cols-[15] h-screen'>
      <Navbar />
    </div>
  )
}

export default HomePage;
