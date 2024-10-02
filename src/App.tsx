import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./views/home-page/HomePage";
import LoginPage from "./views/login-page/LoginPage";
import RegisterPage from "./views/register-page/RegisterPage";
import { template } from "./libs/template";
import TemplatePersonalizedPage from "./views/template-personalized-page/TemplatePersonalizedPage";
import DashboardPage from "./views/dashboard-page/DashboardPage";
import CreateInvitationPage from "./views/create-invitaion-page/CreateInvitationPage";

function App() {
  const isSubDomain = window.location.host === template.domain;

  if (isSubDomain && template.isPay) {
    return (
      <Routes>
        <Route path="*" element={<TemplatePersonalizedPage />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/edit" element={<CreateInvitationPage />} />
      </Routes>
    );
  }
}

export default App;
