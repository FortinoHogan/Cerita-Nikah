import React from "react";
import Navbar from "../../layouts/navbar/Navbar";
import { useAuth } from "../../context/auth-context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const authContext = useAuth();
  const nav = useNavigate();
  return (
    <div className="h-screen flex flex-col gap-10 max-lg:gap-7">
      {!authContext?.isLogin && <Navigate to={"/"} />}
      <div className="h-[9%]">
        <Navbar />
      </div>
      <img
        src="assets/images/background.png"
        alt="background"
        className="w-full h-full absolute opacity-[30%] object-cover object-right"
      />
      <div className="h-[91%] px-10 max-lg:px-5 pb-10 w-full grid grid-cols-4 relative overflow-hidden">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl font-semibold text-custom-pink">
            Your Invitations
          </h1>
          <img src="assets/images/add-new-invitation.png" alt="add" className="cursor-pointer transition-all duration-300 hover:scale-105" onClick={() => nav("/edit")}/>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
