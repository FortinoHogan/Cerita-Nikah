import React, { useEffect, useState } from "react";
import Navbar from "../../layouts/navbar/Navbar";
import { useAuth } from "../../context/auth-context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { getTemplatePersonalizedByUserId } from "../../services/template-personalized/TemplateService";
import { ITemplatePersonalized } from "../../interfaces/templatePersonalized.interfaces";
import Loading from "../../components/loading/Loading";

const DashboardPage = () => {
  const authContext = useAuth();
  const nav = useNavigate();
  const [templatePersonalized, setTemplatePersonalized] = useState<
    ITemplatePersonalized[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserTemplates = async () => {
      setLoading(true);
      if (authContext?.currentUser?.uid) {
        const templates = await getTemplatePersonalizedByUserId(
          authContext.currentUser.uid
        );
        setTemplatePersonalized(templates);
      }
      setLoading(false);
    };

    fetchUserTemplates();
  }, [authContext?.currentUser?.uid]);

  console.log("loading", loading);
  console.log("templatePersonalized", templatePersonalized);

  return (
    <div className="h-screen flex flex-col gap-10 max-lg:gap-7">
      {loading && <Loading />}
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
          <div className="flex gap-10">
            {templatePersonalized.map((template) => (
              <div>data</div>
            ))}
            <img
              src="assets/images/add-new-invitation.png"
              alt="add"
              className="cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={() => nav("/edit")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
