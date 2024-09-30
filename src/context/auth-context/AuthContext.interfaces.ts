import { User } from "firebase/auth";
import React from "react";

export interface IAuthContext {
  children: React.ReactNode;
}

export interface IAuthContextType {
  isLogin: boolean;
  isEmailUser: boolean;
  isGoogleUser: boolean;
  currentUser: User | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
}
