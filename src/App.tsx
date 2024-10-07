import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./views/home-page/HomePage";
import LoginPage from "./views/login-page/LoginPage";
import RegisterPage from "./views/register-page/RegisterPage";
import { templatePersonalizedExample } from "./libs/templatePersonalized.example";
import TemplatePersonalizedPage from "./views/template-personalized-page/TemplatePersonalizedPage";
import DashboardPage from "./views/dashboard-page/DashboardPage";
import CreateInvitationPage from "./views/create-invitaion-page/CreateInvitationPage";
import ViewCreateInvitationPage from "./views/view-create-invitation-page/ViewCreateInvitationPage";

function App() {
  const [templatePersonalized, setTemplatePersonalized] = useState(
    templatePersonalizedExample
  );
  // todo change templatePersonalizedExample into the real data
  const isSubDomain = window.location.host === templatePersonalized.domain;

  if (isSubDomain && templatePersonalized.isPay) {
    return (
      <Routes>
        <Route
          path="*"
          element={<TemplatePersonalizedPage template={templatePersonalized} />}
        />
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
        <Route path="/edit/view" element={<ViewCreateInvitationPage />} />
      </Routes>
    );
  }
}

export default App;
