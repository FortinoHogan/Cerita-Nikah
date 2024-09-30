import React, { useContext, useState, useEffect } from "react";
import { auth } from "../../services/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { IAuthContext, IAuthContextType } from "./AuthContext.interfaces";

const AuthContext = React.createContext<IAuthContextType | null>(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props: IAuthContext) {
  const { children } = props;
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLogin, setIsLogin] = useState(false);
  const [isEmailUser, setIsEmailUser] = useState(false);
  const [isGoogleUser, setIsGoogleUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user: User | null) {
    if (user) {
      setCurrentUser({ ...user });

      // check if provider is email and password login
      const isEmail = user.providerData.some(
        (provider) => provider.providerId === "password"
      );
      setIsEmailUser(isEmail);

      // check if the auth provider is google or not
      //   const isGoogle = user.providerData.some(
      //     (provider) => provider.providerId === GoogleAuthProvider.PROVIDER_ID
      //   );
      //   setIsGoogleUser(isGoogle);

      setIsLogin(true);
    } else {
      setCurrentUser(null);
      setIsLogin(false);
    }

    setLoading(false);
  }

  const value: IAuthContextType = {
    isLogin,
    isEmailUser,
    isGoogleUser,
    currentUser,
    setCurrentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
