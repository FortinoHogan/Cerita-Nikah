import React, { useState } from "react";
import { doSignInWithGoogle } from "../../services/user/UserService";

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
    <div>
      HomePage
      <button
        disabled={isSigningIn}
        onClick={(e) => {
          onGoogleSignIn(e);
        }}
      >
        click me!
      </button>
    </div>
  );
};

export default HomePage;
