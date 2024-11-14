import React, { useEffect, useState } from "react";
import Navbar from "../../layouts/navbar/Navbar";
import { useAuth } from "../../context/auth-context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { getTemplatePersonalizedByUserId } from "../../services/template-personalized/TemplateService";
import { ITemplatePersonalized } from "../../interfaces/templatePersonalized.interfaces";
import Loading from "../../components/loading/Loading";
import FilledInvitationCard from "../../components/filled-invitation-card/FilledInvitationCard";
import { useDispatch } from "react-redux";
import { CLEAR_STATE } from "../../services/redux/template-slice/TemplateSlice";

const DashboardPage = () => {
  const authContext = useAuth();
  const nav = useNavigate();
  const [templatePersonalized, setTemplatePersonalized] = useState<
    ITemplatePersonalized[]
  >([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();


  const handleCreate = () => {
    dispatch(CLEAR_STATE());
    nav("/edit");
  }

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
      <div className="h-[91%] px-10 max-lg:px-5 pb-10 w-full relative overflow-hidden flex flex-col gap-5">
        <h1 className="text-5xl font-semibold text-custom-pink">
          Your Invitations
        </h1>
        <div className="grid grid-cols-5 gap-16 max-2xl:grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1">
          {templatePersonalized.slice().reverse().map((template, index) => (
            <FilledInvitationCard data={template} key={index} />
          ))}
          <img
            src="assets/images/add-new-invitation.png"
            alt="add"
            className="cursor-pointer transition-all duration-300 hover:scale-105"
            onClick={handleCreate}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
